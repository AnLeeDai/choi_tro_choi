import { User } from 'src/modules/user/interfaces/user.interface';

export interface RegisterResponse {
  message: string;
  data: User;
}
