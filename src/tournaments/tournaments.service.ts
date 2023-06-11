import { Inject, Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament, TournamentDocument } from './tournament.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TournamentsService {

  constructor(@InjectModel(Tournament.name) private readonly tournamentModel: Model<TournamentDocument>) { }

  create(createTournamentDto: CreateTournamentDto) {
    const createdTournament = new this.tournamentModel(createTournamentDto);
    return createdTournament.save();
  }

  findAll() {
    return this.tournamentModel.find({}).exec();
  }

  findOne(_id: string) {
    return this.tournamentModel.findById(_id).exec();
  }

  update(_id: string, updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentModel.updateOne({ _id }, { $set: updateTournamentDto }).exec();
  }

  remove(_id: string) {
    return this.tournamentModel.deleteOne({ _id });
  }
}
