import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
    
    @Prop()
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true })
    dob: string;

    @Prop()
    preferred_name: string;

    @Prop({ index: { unique: true }})
    email: string;
    
    @Prop()
    phone_number: string;

    @Prop({ default: true })
    is_active: boolean;
    
    @Prop({ default: false })
    is_owner: boolean;

    @Prop()
    city: string;

    @Prop()
    state: string;

}

export const UserSchema = SchemaFactory.createForClass(User);