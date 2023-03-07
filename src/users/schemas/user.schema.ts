import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { PaymentMethod } from "./payment-method.schema";
import { Channel } from "./channel.schema";
import { UtilsService } from "src/shared/utils.service";

export type UserDocument = mongoose.HydratedDocument<User>;
@Schema()
export class User {
    
    @Prop({ index: { unique: true } })
    user_id: string;

    @Prop({ required: true })
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

    @Prop({ required: true, default: [] })
    roles: string[];

    // @Prop({ type: mongoose.Types.ObjectId, ref: 'PaymentMethod'})
    // payment_methods: PaymentMethod[];

    // @Prop({ type: mongoose.Types.ObjectId, ref: 'Channel'})
    // channels: Channel[];

}

export const UserSchema = SchemaFactory.createForClass(User);