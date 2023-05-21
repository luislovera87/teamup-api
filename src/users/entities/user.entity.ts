export class User {
    // readonly _id?: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly dob: string;
    readonly email: string;
    readonly preferred_name?: string;
    readonly phone_number?: string;
    readonly is_active?: boolean = true;
    readonly is_owner?: boolean = false;
    readonly city?: string;
    readonly state?: string; 
}
