import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('leagues')
@Controller('leagues')
export class LeaguesController {
  constructor(private readonly leaguesService: LeaguesService) {}

  @Post()
  create(@Body() createLeagueDto: CreateLeagueDto) {
    return this.leaguesService.create(createLeagueDto);
  }

  @Get()
  findAll() {
    return this.leaguesService.findAll();
  }

  @Get(':_id')
  findById(@Param('_id') _id: string) {
    return this.leaguesService.findById(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateLeagueDto: UpdateLeagueDto) {
    return this.leaguesService.update(_id, updateLeagueDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.leaguesService.remove(_id);
  }

  
}
