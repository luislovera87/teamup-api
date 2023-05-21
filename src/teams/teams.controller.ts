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
}
