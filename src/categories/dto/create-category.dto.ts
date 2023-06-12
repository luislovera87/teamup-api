import { ApiProperty } from "@nestjs/swagger";
import { Sport } from "src/sports/sport.schema";

export class CreateCategoryDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly sport: Sport;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly is_active: boolean = true;

}
