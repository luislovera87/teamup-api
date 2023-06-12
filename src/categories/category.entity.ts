import { Sport } from "src/sports/sport.schema";

export class Category {
    readonly name: string;
    readonly sport: Sport;
    readonly description: string;
    readonly is_active: boolean = true;
}