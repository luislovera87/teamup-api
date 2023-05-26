import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly sport_id: number;

    @ApiProperty()
    readonly category_id: number;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly is_active: boolean = true;

}
