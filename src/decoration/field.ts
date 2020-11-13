import { Argumenter } from '@joejukan/argumenter';
import { IField, Type } from '../abstraction';
import { Cardinality } from '../enumeration';
import { addField } from '../reflection';

export function Field(type: Type): PropertyDecorator;
export function Field(symbol: string): PropertyDecorator;
export function Field(type: Type, alias: string): PropertyDecorator;
export function Field(symbol: string, alias: string): PropertyDecorator;
export function Field(type: Type, cardinality: Cardinality): PropertyDecorator;
export function Field(symbol: string, cardinality: Cardinality): PropertyDecorator;
export function Field(type: Type, alias: string, cardinality: Cardinality): PropertyDecorator;
export function Field(symbol: string, alias: string, cardinality: Cardinality): PropertyDecorator;
export function Field(type: Type, cardinality: Cardinality, alias: string): PropertyDecorator;
export function Field(symbol: string, cardinality: Cardinality, alias: string): PropertyDecorator;
export function Field(...args) {
  const a = new Argumenter(args);
  let symbol = a.string;
  const alias = a.string;
  const type = a.function as Type;
  
  const cardinality: Cardinality = a.number;

  if (!symbol && type) {
    symbol = type.name;
  }

  return ({ constructor: type }: Object, name: string) => {
    const field: IField = { alias, cardinality, name, symbol };
    addField(field, <Type> type);
  }
}