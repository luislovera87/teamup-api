import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

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

    @Prop()
    players: string[];

    @Prop()
    is_active: boolean;

}

export const TeamSchema = SchemaFactory.createForClass(Team);