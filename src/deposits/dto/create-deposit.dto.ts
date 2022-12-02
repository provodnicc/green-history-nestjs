import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNotEmpty } from "class-validator"
import { DepositTerm } from "../enums/term.enum"

export class CreateDepositDto {
    @ApiProperty()
    @IsNotEmpty()
    amount: number

    @ApiProperty()
    @IsNotEmpty()
    term: DepositTerm

}
