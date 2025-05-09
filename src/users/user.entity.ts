import { Types } from "mongoose";
// import { LocationDetail } from "src/shared/schemas/location-detail.schema";

export class User {
    readonly first_name: string;
    readonly last_name: string;
    readonly dob: string;
    readonly email: string;
    readonly preferred_name?: string;
    readonly phone_number?: string;
    readonly is_active?: boolean = true;
    readonly is_owner?: boolean = false;
    // readonly locationDetail?: LocationDetail;
}
