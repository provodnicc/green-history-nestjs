import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { DepositsService } from './deposits.service';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';

@ApiTags('deposits routes')
@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  @Post()
  async create(
    @Req()
    req: Request,

    @Body() 
    createDepositDto: CreateDepositDto
  ) {
    const user_id = Number(req.user)
    return await this.depositsService.create(createDepositDto, user_id);
  }

  @Get()
  async findAll(
    @Req()
    req: Request,
  ) {
    const user_id = Number(req.user)
    return await this.depositsService.findAll(user_id);
  }

  @Get(':id')
  async findOne(
    @Req()
    req: Request,

    @Param('id') 
    id: string
  ) {
    const user_id = Number(req.user)
    return await this.depositsService.findOne(+id, user_id);
  }

  @Patch(':id')
  async update(
    @Req()
    req: Request,

    @Param('id') 
    id: string, 
    
    @Body() 
    updateDepositDto: UpdateDepositDto
  ) {
    const user_id = Number(req.user)
    return await this.depositsService.update(+id, updateDepositDto,user_id);
  }

  @Delete(':id')
  async remove(
    @Req()
    req: Request,

    @Param('id') 
    id: string
  ) {
    const user_id = Number(req.user)
    return await this.depositsService.remove(+id, user_id);
  }
}
