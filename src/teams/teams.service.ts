import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { InjectModel } from '@nestjs/mongoose';
import { TeamDocument } from './schemas/team.schema';
import { Model } from 'mongoose';

@Injectable()
export class TeamsService {

  constructor(@InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>) {}

  create(createTeamDto: CreateTeamDto) {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  findAll(): Promise<Team[]> {
    return this.teamModel.find({}).exec();
  }

  findById(_id: string) {
    return this.teamModel.findOne({ _id }).exec();
  }

  update(_id: string, updateTeamDto: UpdateTeamDto) {
    return this.teamModel.updateOne({ _id }, { $set: updateTeamDto }).exec();
  }

  remove(_id: string) {
    return this.teamModel.deleteOne({ _id }).exec();
  }
}
