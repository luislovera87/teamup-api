import { Injectable } from '@nestjs/common';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { League } from './entities/league.entity';
import { InjectModel } from '@nestjs/mongoose';
import { LeagueDocument } from './schemas/league.schema';
import { Model } from 'mongoose';

@Injectable()
export class LeaguesService {

  constructor(@InjectModel(League.name) private readonly leagueModel: Model<LeagueDocument>) {}

  create(createLeagueDto: CreateLeagueDto) {
    const createdLeague = new this.leagueModel(createLeagueDto);
    return createdLeague.save();
  }

  findAll(): Promise<League[]> {
    return this.leagueModel.find({}).exec();
  }

  findById(league_id: string) {
    return this.leagueModel.findOne({ league_id }).exec();
  }

  update(league_id: string, updateLeagueDto: UpdateLeagueDto) {
    return this.leagueModel.updateOne({ league_id }, { $set: updateLeagueDto }).exec();
  }

  remove(league_id: string) {
    return this.leagueModel.deleteOne({ league_id }).exec();
  }
}
