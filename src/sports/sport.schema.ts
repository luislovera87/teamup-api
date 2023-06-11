import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose"

export type SportDocument = HydratedDocument<Sport>;

@Schema()
export class Sport extends Document {

    @Prop({ index: { unique: true }, unique: true })
    name: string;

    @Prop()
    icon: string;

    @Prop()
    alias: string;

    @Prop({ default: true })
    is_active: boolean;

}

export const SportSchema = SchemaFactory.createForClass(Sport);