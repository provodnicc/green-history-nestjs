import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { ATStrategy } from './strategies/AT.strategy';

@Module({
  imports: [JwtModule],
  providers: [AuthService, ATStrategy]
})
export class AuthModule {}
