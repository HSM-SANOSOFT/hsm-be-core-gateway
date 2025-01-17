import { IsNotEmpty, IsObject } from 'class-validator';

export class AllPacienteDto {
  @IsObject()
  @IsNotEmpty()
  filtros: Record<string, any>; // Dynamic filters (g_x and specific filters)

  @IsObject()
  @IsNotEmpty()
  table: Record<string, any>; // Dynamic table fields
}
