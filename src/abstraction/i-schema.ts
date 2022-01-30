import { Type } from './type';
import { IField } from './i-field';

export interface ISchema {
  name?: string;
  type?: Type;
  fields?: IField[];
}
