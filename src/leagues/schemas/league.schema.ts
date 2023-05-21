import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

export type LeagueDocument = mongoose.HydratedDocument<League>;

@Schema()
export class League {

    @Prop({ index: { unique: true }})
    league_id: string;

    @Prop({ required: true })
    name: string;

    @Prop()
    owners: string[];

    @Prop({ required: true, default: true })
    is_active: boolean;

    @Prop()
    sport_id: string;

    @Prop()
    teams: string[];

}

export const LeagueSchema = SchemaFactory.createForClass(League);