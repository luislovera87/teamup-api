import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"
import * as mongoose from 'mongoose';
import { User } from "src/users/schemas/user.schema";

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {

    @Prop({ index: { unique: true }})
    team_id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    sport_id: string;

    @Prop({ required: true })
    category_id: string;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'User'})
    players: User[];

    @Prop()
    is_active: boolean;

}

export const TeamSchema = SchemaFactory.createForClass(Team);