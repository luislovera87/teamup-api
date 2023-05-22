import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { League, LeagueSchema } from './schemas/league.schema';
import { UtilsService } from 'src/shared/utils.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
  controllers: [LeaguesController],
  providers: [LeaguesService, UtilsService]
})
export class LeaguesModule { }
