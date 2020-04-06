import { Cardinality } from '../enumeration';

export interface IField {
  name?: string;
  alias?: string;
  symbol?: string;
  cardinality?: Cardinality;
}