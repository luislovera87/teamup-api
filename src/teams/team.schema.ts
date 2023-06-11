import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose"
import { Category } from "src/categories/category.schema";
import { Sport } from "src/sports/sport.schema";
import { User } from "src/users/user.schema";

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ type: Types.ObjectId, ref: 'Sport', required: true })
    sport: Sport;

    @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
    category: Category;

    @Prop({ type: Types.ObjectId, ref: 'User', required: true, default: [] })
    players: User[]

    @Prop({ default: true })
    is_active: boolean;

}

export const TeamSchema = SchemaFactory.createForClass(Team);