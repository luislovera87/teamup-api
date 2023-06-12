import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose"

export type LocationDocument = HydratedDocument<LocationDetail>;

@Schema()
export class LocationDetail extends Document {

    @Prop()
    alias: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop({ required: true })
    country: string;

    @Prop()
    countryCode: string;

    @Prop({ default: false })
    is_primary: boolean;

}

export const LocationSchema = SchemaFactory.createForClass(LocationDetail);