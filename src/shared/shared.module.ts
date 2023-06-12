import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { LocationDetail, LocationSchema } from './schemas/location-detail.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: LocationDetail.name, schema: LocationSchema }])],
  exports: [MongooseModule],
  providers: [UtilsService]
})
export class SharedModule {}
