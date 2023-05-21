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

  @Get(':d_id')
  findById(@Param('d_id') d_id: string) {
    return this.teamsService.findById(d_id);
  }

  @Patch(':d_id')
  update(@Param('d_id') d_id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(d_id, updateTeamDto);
  }

  @Delete(':d_id')
  remove(@Param('d_id') d_id: string) {
    return this.teamsService.remove(d_id);
  }
}
