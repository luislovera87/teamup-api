import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sport } from './entities/sport.entity';
import { SportDocument } from './schemas/sport.schema';

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

  findById(sport_id: string) {
    return this.sportModel.findOne({ sport_id }).exec();
  }

  update(sport_id: string, updateSportDto: UpdateSportDto) {
    return this.sportModel.updateOne({ sport_id }, { $set: updateSportDto }).exec();
  }

  remove(sport_id: string) {
    return this.sportModel.deleteOne({ sport_id }).exec();
  }
}
