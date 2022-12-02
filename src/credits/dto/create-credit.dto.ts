import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNotEmpty } from "class-validator"
import { CreditPurpose } from "../enums/purpose.enum"
import { CreditTerm } from "../enums/term.enum"

export class CreateCreditDto {
    @ApiProperty()
    @IsNotEmpty()
    amount: number

    @ApiProperty()
    @IsNotEmpty()
    term: CreditTerm

    @ApiProperty()
    @IsNotEmpty()
    purpose: CreditPurpose

}
