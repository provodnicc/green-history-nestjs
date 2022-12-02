import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { Deposit } from './entities/deposit.entity';
import { DepositTerm } from './enums/term.enum';

@Injectable()
export class DepositsService {
  constructor(
    @InjectRepository(Deposit)
    private depositRepository: Repository<Deposit>
  ){}

  async create(createDepositDto: CreateDepositDto, user_id: number) {
    
    createDepositDto.term = DepositTerm[createDepositDto.term]
    console.log()

    // const deposit = this.depositRepository.create()
    // deposit.user_id = user_id

    return await this.depositRepository.save({...createDepositDto, user_id: user_id})
  }

  async findAll(user_id: number) {
    return await this.depositRepository.findBy({user_id: user_id})
  }

  async findOne(id: number, user_id: number) {
    return await this.depositRepository.findOneBy({id:id, user_id: user_id})
  }

  async update(id: number, updateDepositDto: UpdateDepositDto, user_id: number) {
    const deposit = await this.findOne(id, user_id)

    return await this.depositRepository.update(deposit, updateDepositDto)  
  }

  async remove(id: number, user_id: number) {
    const deposit = await this.findOne(id, user_id)
    
    return await this.depositRepository.remove(deposit) 
  }
}
