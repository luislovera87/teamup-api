import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type SportDocument = HydratedDocument<Sport>;

@Schema()
export class Sport {

    @Prop({ required:  true })
    name: string;

    @Prop({ required: true, default: true })
    is_active: boolean
}

export const SportSchema = SchemaFactory.createForClass(Sport);