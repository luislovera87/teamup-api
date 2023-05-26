import { ApiProperty } from "@nestjs/swagger";

export class CreateTeamDto {
    
    @ApiProperty()
    readonly name: string;

    
    @ApiProperty()
    readonly category_id: string;

    
    @ApiProperty()
    readonly participants?: string[] = [];

    
    @ApiProperty()
    readonly is_active: boolean = true;

}
