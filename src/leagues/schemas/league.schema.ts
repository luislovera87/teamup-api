import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { User } from "src/users/schemas/user.schema";

export type LeagueDocument = mongoose.HydratedDocument<League>;

@Schema()
export class League {

    @Prop()
    league_id: string;

    @Prop()
    name: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
    owners: User[];

    @Prop()
    is_active: boolean;

}

export const LeagueSchema = SchemaFactory.createForClass(League);