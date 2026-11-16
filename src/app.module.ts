import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgenceDeVoyagesModule } from './agence-de-voyages/agence-de-voyages.module';

@Module({
  imports: [AgenceDeVoyagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
