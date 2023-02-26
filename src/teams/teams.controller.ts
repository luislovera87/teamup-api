import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiTags } from '@nestjs/swagger';

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
  findById(@Param('team_id') team_id: string) {
    return this.teamsService.findById(team_id);
  }

  @Patch(':team_id')
  update(@Param('team_id') team_id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(team_id, updateTeamDto);
  }

  @Delete(':team_id')
  remove(@Param('team_id') team_id: string) {
    return this.teamsService.remove(team_id);
  }
}
