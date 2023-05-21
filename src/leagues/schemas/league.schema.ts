import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

export type LeagueDocument = mongoose.HydratedDocument<League>;

@Schema()
export class League {

    @Prop()
    league_id: string;

    @Prop()
    name: string;

    @Prop()
    owners: string[];

    @Prop()
    is_active: boolean;

    @Prop()
    sport_id: string;

    @Prop()
    teams: string[];

}

export const LeagueSchema = SchemaFactory.createForClass(League);