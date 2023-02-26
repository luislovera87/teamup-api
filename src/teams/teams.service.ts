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

  findById(team_id: string) {
    return this.teamModel.findOne({ team_id }).exec();
  }

  update(team_id: string, updateTeamDto: UpdateTeamDto) {
    return this.teamModel.updateOne({ team_id }, { $set: updateTeamDto }).exec();
  }

  remove(team_id: string) {
    return this.teamModel.deleteOne({ team_id }).exec();
  }
}
