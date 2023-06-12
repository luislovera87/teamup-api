import { Document, Types } from "mongoose";
import { Category } from "src/categories/category.schema";
import { Sport } from "src/sports/sport.schema";
import { User } from "src/users/user.schema";

export class Team {
    readonly name: string;
    readonly sport: Sport;
    readonly category: Category;
    readonly players?: User[];
    readonly is_active: boolean = true;
}
