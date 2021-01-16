import { IField, Type } from '../abstraction';
import { addField } from '../reflection';

export function Ignore(): PropertyDecorator{
  return ({ constructor: type }, name) => {
    addField({ name, ignore: true } as IField, type as Type);
  }
}