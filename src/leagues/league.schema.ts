import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose"
import { LocationDetail } from "src/shared/schemas/location-detail.schema";
import { Sport } from "src/sports/sport.schema";
import { Team } from "src/teams/team.schema";
import { User } from "src/users/user.schema";


export type LeagueDocument = HydratedDocument<League>;

@Schema()
export class League extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ type: Types.ObjectId, ref: 'User', default: [] })
    owners: User[];

    @Prop({ type: Types.ObjectId, ref: 'Sport', required: true })
    sport: Sport;

    @Prop({ type: Types.ObjectId, ref: 'Team', default: [] })
    teams: Team[];

    @Prop({ type: Types.ObjectId, ref: 'LocationDetail', required: true, default: [] })
    locations: LocationDetail[]

    @Prop({ default: true })
    is_active: boolean;

}

export const LeagueSchema = SchemaFactory.createForClass(League);