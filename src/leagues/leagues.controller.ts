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

  @Get(':league_id')
  findOne(@Param('league_id') league_id: string) {
    return this.leaguesService.findOne(league_id);
  }

  @Patch(':league_id')
  update(@Param('league_id') league_id: string, @Body() updateLeagueDto: UpdateLeagueDto) {
    return this.leaguesService.update(league_id, updateLeagueDto);
  }

  @Delete(':league_id')
  remove(@Param('league_id') league_id: string) {
    return this.leaguesService.remove(league_id);
  }

  
}
