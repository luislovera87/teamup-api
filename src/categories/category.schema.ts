import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    sport_id: number;

    @Prop({ required: true })
    category_id: number;

    @Prop()
    description: string;

    @Prop({ required: true })
    is_active: boolean;

}

export const CategorySchema = SchemaFactory.createForClass(Category);