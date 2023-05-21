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

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.sportsService.findById(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateSportDto: UpdateSportDto) {
    return this.sportsService.update(_id, updateSportDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.sportsService.remove(_id);
  }
}
