import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { InjectModel } from '@nestjs/mongoose';
import { TeamDocument } from './schemas/team.schema';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { UtilsService } from 'src/shared/utils.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class TeamsService {

  constructor(@InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>, private utilsService: UtilsService) { }

  create(createTeamDto: CreateTeamDto) {
    createTeamDto.team_id = this.utilsService.generateId();
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  findAll(): Promise<Team[]> {
    return this.teamModel.find({}).exec();
  }

  findOne(team_id: string): Promise<Team> {
    return this.teamModel.findOne({ team_id }).exec();
  }

  update(team_id: string, updateTeamDto: UpdateTeamDto) {
    return this.teamModel.updateOne({ team_id }, { $set: updateTeamDto }).exec();
  }

  remove(team_id: string) {
    return this.teamModel.deleteOne({ team_id }).exec();
  }

  async addPlayer(team_id: string, player: UpdateUserDto) {
    const foundTeam = await this.findOne(team_id);
    if(!foundTeam.players.find(player => player.user_id === player.user_id)){
      return this.teamModel.updateOne({ team_id }, { $push: { $players: player } });
    } else {
      throw new Error("Player already exists on this team");
    }

  }
}
