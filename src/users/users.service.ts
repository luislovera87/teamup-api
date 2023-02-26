import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from 'src/users/schemas/user.schema';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}
  create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find({}).exec();
  }

  findById(user_id: string): Promise<User>{
    return this.userModel.findById({ user_id }).exec();
  }

  update(user_id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ user_id }, { $set: updateUserDto }).exec();
  }

  remove(user_id: string) {
    return this.userModel.deleteOne({ user_id }).exec();
  }
}