import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/user.entity';
import { UserDocument } from 'src/users/user.schema';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':_id')
  findById(@Param('_id') _id: string) {
    return this.teamsService.findById(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(_id, updateTeamDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.teamsService.remove(_id);
  }

  @Patch(':team_id/player')
  addPlayer(@Param('team_id') team_id: string, @Body() newPlayer: UserDocument) {
    return this.teamsService.addPlayer(team_id, newPlayer);
  }
}
