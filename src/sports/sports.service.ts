import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sport } from './sport.entity';
import { SportDocument } from './sport.schema';

@Injectable()
export class SportsService {
  
  constructor(@InjectModel(Sport.name) private readonly sportModel: Model<SportDocument>) {}

  create(createSportDto: CreateSportDto) {
    const createdSport = new this.sportModel(createSportDto);
    return createdSport.save();
  }

  findAll(): Promise<Sport[]> {
    return this.sportModel.find({}).exec();
  }

  findById(_id: string) {
    return this.sportModel.findOne({ _id }).exec();
  }

  update(_id: string, updateSportDto: UpdateSportDto) {
    return this.sportModel.updateOne({ _id }, { $set: updateSportDto }).exec();
  }

  remove(_id: string) {
    return this.sportModel.deleteOne({ _id }).exec();
  }
}
