import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SportsService } from './sports.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sports')
@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Post()
  create(@Body() createSportDto: CreateSportDto) {
    return this.sportsService.create(createSportDto);
  }

  @Get()
  findAll() {
    return this.sportsService.findAll();
  }

  @Get(':sport_id')
  findOne(@Param('sport_id') sport_id: string) {
    return this.sportsService.findById(sport_id);
  }

  @Patch(':sport_id')
  update(@Param('sport_id') sport_id: string, @Body() updateSportDto: UpdateSportDto) {
    return this.sportsService.update(sport_id, updateSportDto);
  }

  @Delete(':sport_id')
  remove(@Param('sport_id') sport_id: string) {
    return this.sportsService.remove(sport_id);
  }
}
