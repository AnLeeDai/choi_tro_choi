import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatsService } from '../service/cats.service';
import { CatsController } from '../controller/cats.controller';
import { Cat, CatSchema } from '../schema/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
