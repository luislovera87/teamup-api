import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Types } from "mongoose"
import { LocationDetail } from "src/shared/schemas/location-detail.schema";

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User extends Document {

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

    @Prop({ type: Types.ObjectId, ref: 'LocationDetail' })
    location: LocationDetail;

}

export const UserSchema = SchemaFactory.createForClass(User);