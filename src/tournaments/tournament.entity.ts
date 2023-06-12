import { Category } from "src/categories/category.schema";

export class Tournament {
    readonly name: string;
    readonly is_active: boolean = true;
    readonly categories: Category[] = [];
}
