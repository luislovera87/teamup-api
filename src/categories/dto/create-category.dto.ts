export class CreateCategoryDto {
    readonly name: string;
    readonly sport_id: number;
    readonly category_id: number;
    readonly description: string;
    readonly is_active: boolean = true;
}
