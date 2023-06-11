import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";
import { Category } from "src/categories/category.schema";
import { Sport } from "src/sports/sport.entity";
import { User } from "src/users/user.schema";

export class CreateTeamDto {
    
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly sport: Sport;

    @ApiProperty()
    readonly category: Category;
    
    @ApiProperty()
    readonly participants?: User[] = [];

    @ApiProperty()
    readonly is_active: boolean = true;

}
