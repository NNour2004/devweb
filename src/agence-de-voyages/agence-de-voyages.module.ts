import { Module } from '@nestjs/common';
import { AgenceDeVoyagesService } from './agence-de-voyages.service';
import { AgenceDeVoyagesController } from './agence-de-voyages.controller';

@Module({
  controllers: [AgenceDeVoyagesController],
  providers: [AgenceDeVoyagesService],
})
export class AgenceDeVoyagesModule {}
