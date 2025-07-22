import type { DocumentTypesDtosMap } from '../dto';
import type { DocumentTypeDto } from '../dto';

export type DocumentoPayload = InstanceType<
  (typeof DocumentTypesDtosMap)[DocumentTypeDto]
>;
