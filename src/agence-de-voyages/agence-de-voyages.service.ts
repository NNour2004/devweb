import { Injectable } from '@nestjs/common';
import { CreateAgenceDeVoyageDto } from './dto/create-agence-de-voyage.dto';
import { UpdateAgenceDeVoyageDto } from './dto/update-agence-de-voyage.dto';

@Injectable()
export class AgenceDeVoyagesService {
  private tripe=[{id:1,nom:'to china',price:9000},{id:2,nom:'to Morocco',price:4000}];

  create(createAgenceDeVoyageDto: CreateAgenceDeVoyageDto) {
    return 'This action adds a new agenceDeVoyage';
  }

  findAll() {
    return "this agence de voyage";
    
  }

  findOne(id: number) {
    return `This action returns a #${id} agenceDeVoyage`;
  }

  
  
}
