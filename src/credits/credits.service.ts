import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';
import { Credit } from './entities/credit.entity';

@Injectable()
export class CreditsService {
  constructor(
    @InjectRepository(Credit)
    private creditRepository: Repository<Credit>
  ){}

  async create( createCreditDto: CreateCreditDto, user_id:number,) {
    const credit = this.creditRepository.create(createCreditDto)
    credit.user_id = user_id
    
    return await this.creditRepository.save(credit)
  }

  async findAll(user_id:number,) {
    return await this.creditRepository.findBy({user_id: user_id})
  }

  async findOne(id: number, user_id:number,) {
    return await this.creditRepository.findOneBy({id: id, user_id: user_id})
  }

  async update(id: number, updateCreditDto: UpdateCreditDto, user_id:number,) {
    const credit = await this.findOne(id, user_id)

    return await this.creditRepository.update(credit, updateCreditDto) 
  }

  async remove(id: number, user_id:number) {
    return  
  }
}
