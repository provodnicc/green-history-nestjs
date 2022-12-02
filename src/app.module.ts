import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DepositsModule } from './deposits/deposits.module';
import { WalletModule } from './wallet/wallet.module';
import { CreditsModule } from './credits/credits.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env'
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/**/*.entity{.ts}'],
      autoLoadEntities:true,
      synchronize: true
    }),
    AuthModule, DepositsModule, WalletModule, CreditsModule],
})
export class AppModule {}
