import { Argumenter } from '@joejukan/argumenter';
import { IField, ISchema, Type } from '../abstraction';
import { schemas } from '../globalization';
import { ok } from './ok';

export function addSchema(type: Type) {
  if (!hasSchema(type)){
    if (type) {
      schemas.push({
        name: type.name,
        type,
        fields: []
      })
    }
  }
}

export function hasSchema(type: Type): boolean {
  if (type){
    return schemas.filter(s => s.type === type || s.name === type.name).length > 0;
  }
  return false;
}

export function getSchema(type: Type): ISchema;
export function getSchema(className: string): ISchema;
export function getSchema(...args) {
  const a = new Argumenter(args);
  const type: Type = a.function;
  const name = a.string || (type ? type.name : null);

  if (ok(name)) {
    for (let i = 0; i < schemas.length; i++) {
      if (schemas[i].name === name) {
        return schemas[i];
      }
    }
  }
  
  return null;
}

export function addField(field: IField, type: Type) {
  if (!hasField(field.name, type) && !hasField(field.alias, type)) {
    addSchema(type);
    let schema = getSchema(type);
    schema.fields.push(field);
  }
}

export function getField(name: string, type: Type) {
  const fields = getFields(type).filter(f => (f.name === name || f.alias === name) && ok(name));
  return fields.length > 0 ? fields[0] : null;
}

export function getFields(...args) {
  const argue = new Argumenter(args);

  const target = argue.object;
  const type: Type = target ? target.constructor : argue.function;

  const schema = getSchema(type);
  return schema ? schema.fields : new Array<IField>();
}

export function hasField(name: string, type: Type) {
  return getFields(type).filter(f => (f.name === name || f.alias === name) && ok(name)).length > 0;
}