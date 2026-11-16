import { Injectable } from '@nestjs/common';
import { CreateAgenceDeVoyageDto } from './dto/create-agence-de-voyage.dto';
import { UpdateAgenceDeVoyageDto } from './dto/update-agence-de-voyage.dto';

@Injectable()
export class AgenceDeVoyagesService {
  create(createAgenceDeVoyageDto: CreateAgenceDeVoyageDto) {
    return 'This action adds a new agenceDeVoyage';
  }

  findAll() {
    return `This action returns all agenceDeVoyages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agenceDeVoyage`;
  }

  update(id: number, updateAgenceDeVoyageDto: UpdateAgenceDeVoyageDto) {
    return `This action updates a #${id} agenceDeVoyage`;
  }

  remove(id: number) {
    return `This action removes a #${id} agenceDeVoyage`;
  }
}
