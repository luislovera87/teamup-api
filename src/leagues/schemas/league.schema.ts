import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { User } from "src/users/schemas/user.schema";

export type LeagueDocument = mongoose.HydratedDocument<League>;

@Schema()
export class League {

    @Prop({ index: { unique: true }})
    league_id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
    owners: User[];

    @Prop({ required: true, default: true })
    is_active: boolean;

}

export const LeagueSchema = SchemaFactory.createForClass(League);