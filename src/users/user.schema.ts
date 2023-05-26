import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaType } from "mongoose"
import { Location } from "src/shared/schemas/location.schema";

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
    location: Location;

}

export const UserSchema = SchemaFactory.createForClass(User);