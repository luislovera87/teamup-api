import { ApiProperty } from "@nestjs/swagger";

export class LocationDetail {
    
    @ApiProperty()
    alias: string;
    
    @ApiProperty()
    city: string;
    
    @ApiProperty()
    state: string;
    
    @ApiProperty()
    country: string;
    
    @ApiProperty()
    latitude: number;
    
    @ApiProperty()
    longitude: number;
    
    @ApiProperty()
    active: boolean = true;
    
    @ApiProperty()
    isPrimary: boolean;
    // .... routes, how to get there, shade, 
}