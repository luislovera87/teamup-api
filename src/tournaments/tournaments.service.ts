import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';

@Injectable()
export class TournamentsService {
  create(createTournamentDto: CreateTournamentDto) {
    return 'This action adds a new tournament';
  }

  findAll() {
    return `This action returns all tournaments`;
  }

  findOne(_id: string) {
    return `This action returns a #${_id} tournament`;
  }

  update(_id: string, updateTournamentDto: UpdateTournamentDto) {
    return `This action updates a #${_id} tournament`;
  }

  remove(_id: string) {
    return `This action removes a #${_id} tournament`;
  }
}
