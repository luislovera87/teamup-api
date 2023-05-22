import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type TournamentDocument = HydratedDocument<Tournament>;
@Schema()
export class Tournament {

    @Prop({ required: true })
    name: string;

    @Prop({ default: true })
    is_active: boolean;

    @Prop({ default: []})
    categories: string[]

}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);