import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Wallet {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    walletFrom: string

    @Column()
    walletTo: string

    @Column()
    startValue: number
    
    @Column()
    finishValue: number

    @Column()
    user_id: number

    @Column({default: new Date()})
    createdAt: Date

}
