import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateWalletDto {
    @ApiProperty()
    @IsNotEmpty()
    walletFrom: string
    
    @ApiProperty()
    @IsNotEmpty()
    walletTo: string
    
    @ApiProperty()
    @IsNotEmpty()
    startValue: number 
    
    @ApiProperty()
    @IsNotEmpty()
    finishValue: number

}
