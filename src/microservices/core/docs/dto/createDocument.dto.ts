import { Type } from 'class-transformer';
import { IsEnum, IsString, ValidateNested } from 'class-validator';

import type { DocumentoPayload } from '../type/document_payload.type';
import { DocumentTypeDto, DocumentTypesDtosMap } from './document_type';

export class CreateDocumentoDto {
  @IsEnum(DocumentTypeDto)
  type: DocumentTypeDto;

  @IsString()
  id: string;

  @ValidateNested()
  @Type(opts => {
    return DocumentTypesDtosMap[(opts?.object as CreateDocumentoDto).type];
  })
  payload: DocumentoPayload;
}
