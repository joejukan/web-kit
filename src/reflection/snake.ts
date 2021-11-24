import {Argumenter} from "@joejukan/argumenter";

export function snake (value: string): string;
export function snake (type: new () => any): string;
export function snake (value: string, lowerCase: boolean): string;
export function snake (type: new () => any, lowerCase: boolean): string;
export function snake (...args): string {
    const argue = new Argumenter(args);
    const string = argue.string;
    const lowerCase = argue.boolean;
    const type: new () => any = argue.function;
    
    let value: string = string || type.name;
    value = value.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/([a-zA-Z])\-([a-zA-Z])/g, '$1_$2');
    return lowerCase ? value.toLowerCase() : value;
}