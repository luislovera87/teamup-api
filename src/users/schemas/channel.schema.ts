import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"

export type ChannelDocument = HydratedDocument<Channel>;

@Schema()
export class Channel {

    @Prop({ index: { unique: true }, required: true })
    channel_id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true, default: false })
    is_enabled: boolean;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);