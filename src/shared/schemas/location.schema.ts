import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type LocationDocument = HydratedDocument<Location>;

@Schema()
export class Location {

    @Prop()
    name: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop({ required: true })
    country: string;

    @Prop()
    countryCode: string;

}

export const LocationSchema = SchemaFactory.createForClass(Location);