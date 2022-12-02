import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>
  ){}

  async create(createWalletDto: CreateWalletDto, user_id: number) {
    return  await this.walletRepository.save(createWalletDto);
  }

  async findAll(user_id: number) {
    return  await this.walletRepository.findBy({user_id: user_id});
  }

  async findOne(id: number, user_id: number) {
    return await this.walletRepository.findOneBy({user_id: user_id, id: id})
  }

  async update(id: number, updateWalletDto: UpdateWalletDto, user_id: number) {
    const wallet = await this.findOne(id, user_id)
    return  await this.walletRepository.update(wallet, updateWalletDto)
  }

  async remove(id: number, user_id: number) {
    const wallet = await this.findOne(id, user_id)
    return await this.walletRepository.remove(wallet)
  }
}