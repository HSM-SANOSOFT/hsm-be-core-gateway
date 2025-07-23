// conversation-filter.dto.ts
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsIn,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';

import {
  AttributeKey,
  Operator,
  QueryOperator,
} from '../type/estadistica_chatbot';

class ConvFilterConditionDto {
  @IsEnum(AttributeKey)
  attribute_key: AttributeKey;

  @IsEnum(Operator)
  filter_operator: Operator;

  @IsNotEmpty()
  values: string | number | boolean | Date | null;

  @IsOptional()
  @IsIn(QueryOperator)
  query_operator?: QueryOperator;
}

export class EstadisticaChatbotDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConvFilterConditionDto)
  payload: ConvFilterConditionDto[];
}
