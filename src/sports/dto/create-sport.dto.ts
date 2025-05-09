import { ApiProperty } from "@nestjs/swagger";

export class CreateSportDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly alias: string;
    @ApiProperty()
    readonly icon: string;
    @ApiProperty({ default: true })
    readonly is_active: boolean;
}
