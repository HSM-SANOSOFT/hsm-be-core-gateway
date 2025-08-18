import type {
  DocumentTypeDto,
  DocumentTypesDtosMap,
} from 'src/api/dto/core/docs';

export type DocumentoPayload = InstanceType<
  (typeof DocumentTypesDtosMap)[DocumentTypeDto]
>;
