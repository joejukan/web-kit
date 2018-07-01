import { Argumenter } from "@joejukan/argumenter";
import { ok } from ".";
import { pluralNoun } from "../globalization";

export function plural(noun: string): string;
export function plural(object: Object): string;
export function plural(type: { new (): any }): string;
export function plural(...args){
    let argue = new Argumenter(args);
    let type: {new (): any} = argue.function;
    let object = argue.object;
    let noun = argue.string;

    if(object){
        type = <any> object['constructor'];
    }

    if(type){
        noun = type['name'];
    }

    if(ok(noun)){
        noun = noun.toLowerCase();
        if(pluralNoun[noun]){
            noun = pluralNoun[noun];
        }
        else if(noun.endsWith('quy')){
            noun = noun.replace(/y$/i, 'ies');
        }
        else if(noun.match(/.*[aeiou]y$/i)){
            noun = `${noun}s`;
        }
        else if(noun.endsWith('um')){
            noun = noun.replace(/um$/i, 'a');
        }
        else if(noun.endsWith('y')){
            noun = noun.replace(/y$/i, 'ies');
        }
        else if(noun.endsWith('ix')){
            noun = noun.replace(/ix$/i, 'ices');
        }
        else if(noun.match(/.*[shx]$/i)){
            noun = `${noun}es`;
        }
        else {
            noun = `${noun}s`;
        }
    }

    return noun;
}