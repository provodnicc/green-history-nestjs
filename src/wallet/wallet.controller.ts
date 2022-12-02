import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('wallet routes')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  async create(
    @Req()
    req: Request,
    @Body() createWalletDto: CreateWalletDto
  ) {
    const user_id = Number(req.user)
    
    return await this.walletService.create(createWalletDto, user_id);
  }

  @Get()
  async findAll(
    @Req()
    req: Request,
  ) {
    const user_id = Number(req.user)
    return await this.walletService.findAll(user_id);
  }

  @Get(':id')
  async findOne(
    @Req()
    req: Request,
@Param('id') id: string) {
    const user_id = Number(req.user)
    return await this.walletService.findOne(+id, user_id);
  }

  @Patch(':id')
  async update(
    @Req()
    req: Request,

    @Param('id') 
    id: string,

    @Body() 
    updateWalletDto: UpdateWalletDto
  ) {
    const user_id = Number(req.user)
    return await this.walletService.update(+id, updateWalletDto,user_id);
  }

  @Delete(':id')
  async remove(
    @Req()
    req: Request,
  
    @Param('id') 
    id: string
  ) {
    const user_id = Number(req.user)
    return await this.walletService.remove(+id, user_id);
  }
}
