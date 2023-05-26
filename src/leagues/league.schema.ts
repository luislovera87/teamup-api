import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"
import { Location } from "src/shared/schemas/location.schema";

export type LeagueDocument = HydratedDocument<League>;

@Schema()
export class League {

    @Prop({ required: true })
    name: string;

    @Prop()
    owners: string[];

    @Prop({ default: true })
    is_active: boolean;

    @Prop()
    sport_id: string;

    @Prop()
    teams: string[];

    @Prop({ default: [] })
    locations: Location[]


}

export const LeagueSchema = SchemaFactory.createForClass(League);