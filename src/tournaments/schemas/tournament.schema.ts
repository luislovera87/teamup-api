import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"

export type TournamentDocument = mongoose.HydratedDocument<Tournament>;
@Schema()
export class Tournament {
    
    @Prop({ index: { unique: true } })
    tournament_id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ default: true })
    is_active: boolean;

}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);