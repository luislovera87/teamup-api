import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { PaymentMethod } from "./payment-method.schema";

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
export class User {
    
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    dob: string;

    @Prop()
    preferred_name: string;

    @Prop()
    email: string;
    
    @Prop()
    phone_number: string;

    @Prop()
    is_active: boolean;
    
    @Prop()
    is_owner: boolean;

    @Prop()
    city: string;

    @Prop()
    state: string;

}

export const UserSchema = SchemaFactory.createForClass(User);