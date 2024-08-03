import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Cat, CatDocument } from '../schema/cat.schema';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const existingCat = await this.catModel
      .findOne({ name: createCatDto.name })
      .exec();
    if (existingCat) {
      throw new ConflictException(
        `Cat with name ${createCatDto.name} already exists`,
      );
    }
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    const findAllCat = await this.catModel.find().exec();

    if (!findAllCat) {
      throw new NotFoundException(`Cat not found`);
    }

    return findAllCat;
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.catModel.findById(id).exec();
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    if (updateCatDto.name) {
      const existingCat = await this.catModel
        .findOne({ name: updateCatDto.name })
        .exec();
      if (existingCat && existingCat.id.toString() !== id) {
        throw new ConflictException(
          `Cat with name ${updateCatDto.name} already exists`,
        );
      }
    }
    const updatedCat = await this.catModel
      .findByIdAndUpdate(id, updateCatDto, { new: true })
      .exec();
    if (!updatedCat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return updatedCat;
  }

  async delete(id: string): Promise<void> {
    const result = await this.catModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
  }
}
