import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose"
import { Category } from "src/categories/category.schema";
import { League } from "src/leagues/league.schema";
import { Team } from "src/teams/team.schema";

export type TournamentDocument = HydratedDocument<Tournament>;
@Schema()
export class Tournament extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ default: true })
    is_active: boolean;

    @Prop({ default: []})
    categories: Category[]

    @Prop({ require: true, ref: 'League', type: Types.ObjectId })
    league: League

}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);