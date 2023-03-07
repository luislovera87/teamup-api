import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

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

  @Get(':team_id')
  findOne(@Param('team_id') team_id: string) {
    return this.teamsService.findOne(team_id);
  }

  @Patch(':team_id')
  update(@Param('team_id') team_id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(team_id, updateTeamDto);
  }

  @Delete(':team_id')
  remove(@Param('team_id') team_id: string) {
    return this.teamsService.remove(team_id);
  }

  @Patch(':team_id/player')
  addPlayer(@Param('team_id') team_id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.teamsService.addPlayer(team_id, updateUserDto);
  }
}
