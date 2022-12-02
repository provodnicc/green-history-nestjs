import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { DepositTerm } from "../enums/term.enum"
@Entity()
export class Deposit {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @Column()
    term: DepositTerm

    @Column()
    user_id: number

    @Column({default: new Date()})
    createdAt: Date
}
