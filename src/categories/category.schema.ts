import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose"
import { Sport } from "src/sports/sport.schema";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ type: Types.ObjectId, ref: 'Sport', required: true })
    sport: Sport;

    @Prop()
    description: string;

    @Prop({ default: true })
    is_active: boolean;

}

export const CategorySchema = SchemaFactory.createForClass(Category);