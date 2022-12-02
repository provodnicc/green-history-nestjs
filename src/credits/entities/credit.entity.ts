import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreditPurpose } from "../enums/purpose.enum";
import { CreditTerm } from "../enums/term.enum";

@Entity()
export class Credit {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @Column()
    purpose: CreditPurpose

    @Column()
    term: CreditTerm

    @Column()
    user_id: number

    @Column({default: new Date()})
    createdAt: Date
}
