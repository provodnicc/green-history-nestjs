import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { User } from 'src/auth/types/user';
// import { Response } from 'express';
import { CreditsService } from './credits.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';

@ApiTags('credits routes')
@Controller('credits')
export class CreditsController {
  constructor(private readonly creditsService: CreditsService) {}

  @Post()
  async create(
    @Req()
    req: Request<User>,

    @Body() 
    createCreditDto: CreateCreditDto
  ) {
    const user_id = Number(req.user)
    return await this.creditsService.create( createCreditDto, user_id);
  }

  @Get()
  async findAll(
    @Req()
    req: Request,
  ) {
    const user_id = Number(req.user)

    return await this.creditsService.findAll(user_id);
  }

  @Get(':id')
  async findOne(
    @Req()
    req: Request,

    @Param('id') 
    id: string
  ) {
    const user_id = Number(req.user)
    return await this.creditsService.findOne(+id, user_id);
  }

  @Patch(':id')
  async update(
    @Req()
    req: Request,

    @Param('id') 
    id: string, 

    @Body() 
    updateCreditDto: UpdateCreditDto
  ) {
    const user_id = Number(req.user)
    return await this.creditsService.update(+id, updateCreditDto, user_id);
  }

  @Delete(':id')
  async remove(
    @Req()
    req: Request,

    @Param('id') 
    id: string
  ) {
    const user_id = Number(req.user)

    return await this.creditsService.remove(+id, user_id);
  }
}
