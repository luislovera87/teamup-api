import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type LeagueDocument = HydratedDocument<League>;

@Schema()
export class League {

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