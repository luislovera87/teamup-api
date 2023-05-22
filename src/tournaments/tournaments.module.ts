import { Module } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { TournamentsController } from './tournaments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tournament, TournamentSchema } from './schemas/tournament.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tournament.name, schema: TournamentSchema }]) ],
  controllers: [TournamentsController],
  providers: [TournamentsService]
})
export class TournamentsModule {}
