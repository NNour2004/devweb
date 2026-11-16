import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgenceDeVoyagesModule } from './agence-de-voyages/agence-de-voyages.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    AgenceDeVoyagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
