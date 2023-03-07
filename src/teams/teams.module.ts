import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from './schemas/team.schema';
import { UtilsService } from 'src/shared/utils.service';
import { nanoid } from 'nanoid';

@Module({
  imports: [MongooseModule.forFeatureAsync([{ name: Team.name, useFactory: () => {
    const schema = TeamSchema;
    schema.pre('save', function () {
      this.team_id = nanoid(7);
    });
    return schema;
  } }])],
  controllers: [TeamsController],
  providers: [TeamsService, UtilsService]
})
export class TeamsModule {}
