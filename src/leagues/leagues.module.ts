import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { League, LeagueSchema } from './schemas/league.schema';
import { UtilsService } from 'src/shared/utils.service';
import { nanoid } from 'nanoid';

@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: League.name, useFactory: () => {
        const schema = LeagueSchema;
          schema.pre('save', function () {
            this.league_id = nanoid(7);
          });
          return schema;
      }
    }
  ])],
  controllers: [LeaguesController],
  providers: [LeaguesService, UtilsService]
})
export class LeaguesModule { }
