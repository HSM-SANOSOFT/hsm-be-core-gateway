export const QueryOperator = ['AND', 'OR', null] as const;
export type QueryOperator = (typeof QueryOperator)[number];
