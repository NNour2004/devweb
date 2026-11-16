import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgenceDeVoyagesService } from './agence-de-voyages.service';
import { CreateAgenceDeVoyageDto } from './dto/create-agence-de-voyage.dto';
import { UpdateAgenceDeVoyageDto } from './dto/update-agence-de-voyage.dto';

@Controller('agence-de-voyages')
export class AgenceDeVoyagesController {
  constructor(private readonly agenceDeVoyagesService: AgenceDeVoyagesService) {}

  @Post()
  create(@Body() createAgenceDeVoyageDto: CreateAgenceDeVoyageDto) {
    return this.agenceDeVoyagesService.create(createAgenceDeVoyageDto);
  }

  @Get()
  findAll() {
    return this.agenceDeVoyagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agenceDeVoyagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgenceDeVoyageDto: UpdateAgenceDeVoyageDto) {
    return this.agenceDeVoyagesService.update(+id, updateAgenceDeVoyageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agenceDeVoyagesService.remove(+id);
  }
}
