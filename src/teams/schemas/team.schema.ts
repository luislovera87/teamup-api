import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {

    @Prop()
    team_id: string;

    @Prop()
    name: string;

    @Prop()
    category_id: string;

    @Prop()
    participants: string[];

    @Prop()
    is_active: boolean;

}

export const TeamSchema = SchemaFactory.createForClass(Team);