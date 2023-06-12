import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './team.entity';
import { InjectModel } from '@nestjs/mongoose';
import { TeamDocument } from './team.schema';
import { Model, Schema } from 'mongoose';
import { User } from 'src/users/user.schema';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class TeamsService {

  constructor(@InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>) { }

  create(createTeamDto: CreateTeamDto) {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  findAll(): Promise<Team[]> {
    return this.teamModel.find({}).populate('players').populate('category').populate('sport').exec();
  }

  findById(_id: string) {
    return this.teamModel.findOne({ _id }).populate('players').populate('category').populate('sport').exec();
  }

  update(_id: string, updateTeamDto: UpdateTeamDto) {
    return this.teamModel.updateOne({ _id: _id }, { $set: updateTeamDto }).exec();
  }

  remove(_id: string) {
    return this.teamModel.deleteOne({ _id }).exec();
  }

  async addPlayer(_id: string, body: { player_id: string }) {
    const foundTeam = await this.teamModel.findById(_id).exec();
    if (!foundTeam) {
      throw new Error("Player already exists on this team");
    }

    if (!foundTeam.players.find((player: User) => player._id === body.player_id)) {
      return this.teamModel.updateOne({ _id }, { $push: { players: body.player_id } }).exec();
    } else {
      throw new Error("Player already exists on this team");
    }

  }
}
