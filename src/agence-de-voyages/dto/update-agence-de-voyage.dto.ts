import { PartialType } from '@nestjs/mapped-types';
import { CreateAgenceDeVoyageDto } from './create-agence-de-voyage.dto';

export class UpdateAgenceDeVoyageDto extends PartialType(CreateAgenceDeVoyageDto) {}
