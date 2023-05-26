import { ApiProperty } from "@nestjs/swagger";

export class CreateTournamentDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly is_active: boolean = true;
    @ApiProperty()
    readonly categories: string[] = [];
}
