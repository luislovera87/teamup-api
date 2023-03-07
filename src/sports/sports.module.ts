import { Module } from '@nestjs/common';
import { SportsService } from './sports.service';
import { SportsController } from './sports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sport, SportSchema } from './schema/sport.schema';
import { nanoid } from 'nanoid';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Sport.name, useFactory: () => {
        const schema = SportSchema;
        schema.pre('save', function () {
          this.sport_id = nanoid(7);
        });
        return schema;
      }}
    ])
  ],
  controllers: [SportsController],
  providers: [SportsService]
})
export class SportsModule {}
