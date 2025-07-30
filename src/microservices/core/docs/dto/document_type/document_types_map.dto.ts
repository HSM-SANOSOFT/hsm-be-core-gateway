import { DocumentTypeDto } from './document_type.dto';
import { Hcu053DocumentTemplateDto } from './hcu_053_type.dto';

export const DocumentTypesDtosMap = {
  [DocumentTypeDto.hcu_053]: Hcu053DocumentTemplateDto,
} as const;
