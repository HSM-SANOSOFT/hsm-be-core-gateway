import { ContratosTypeDto } from './contratos_type.dto';
import { DocumentTypeDto } from './document_type.dto';
import { FacturasTypeDto } from './facturas_type.dto';
import { Hcu053DocumentTemplateDto } from './hcu_053_type.dto';
import { InformesTypeDto } from './informes_type.dto';
import { RecetasTypeDto } from './recetas_type.dto';
import { ResultadoImagenTypeDto } from './resultado_imagen_type.dto';
import { ResultadoLaboratorioTypeDto } from './resultado_laboratorio_type.dto';
import { ResultadoPatologiaTypeDto } from './resultado_patologia_type.dto';

export const DocumentTypesDtosMap = {
  [DocumentTypeDto.factura]: FacturasTypeDto,
  [DocumentTypeDto.contrato]: ContratosTypeDto,
  [DocumentTypeDto.informe]: InformesTypeDto,
  [DocumentTypeDto.receta]: RecetasTypeDto,
  [DocumentTypeDto.resultado_imagen]: ResultadoImagenTypeDto,
  [DocumentTypeDto.resultado_laboratorio]: ResultadoLaboratorioTypeDto,
  [DocumentTypeDto.resultado_patologia]: ResultadoPatologiaTypeDto,
  [DocumentTypeDto.hcu_053]: Hcu053DocumentTemplateDto,
} as const;
