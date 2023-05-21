import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { PaymentMethod } from "./payment-method.schema";
import { Channel } from "./channel.schema";
import { UtilsService } from "src/shared/utils.service";

export type UserDocument = mongoose.HydratedDocument<User>;
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