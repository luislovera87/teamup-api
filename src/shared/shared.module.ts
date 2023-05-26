import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { Location, LocationSchema } from './schemas/location.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }])],
  exports: [MongooseModule],
  providers: [UtilsService]
})
export class SharedModule {}
