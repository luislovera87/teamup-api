import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { InjectModel } from '@nestjs/mongoose';
import { TeamDocument } from './schemas/team.schema';
import { Model } from 'mongoose';
import { ObjectId } from "mongoose"
import { UtilsService } from 'src/shared/utils.service';
import { UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class TeamsService {

  constructor(@InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>, private utilsService: UtilsService) { }

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

  async addPlayer(team_id: string, newPlayer: UserDocument) {
    const foundTeam = await this.teamModel.findById(team_id);
    if (!foundTeam.players.find(_id => _id === String(newPlayer._id))) {
      return this.teamModel.updateOne({ team_id }, { $push: { $players: newPlayer._id } });
    } else {
      throw new Error("Player already exists on this team");
    }

  }
}
