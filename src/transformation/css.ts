/** @hidden */
var REGEX = /px|em|\%/i;
export function px(value: number): string;
export function px(value: string): number;
export function px(value){
    return css(value, 'px');
}

export function em(value: number): string;
export function em(value: string): number;
export function em(value){
    return css(value, 'em');
}

export function pct(value: number): string;
export function pct(value: string): number;
export function pct(value){
    return css(value, '%');
}
/** @hidden */
function css(value, suffix: string){
    if(typeof value === 'string'){
        value = value.replace(REGEX, '');
        let integer = parseInt(value);
        return (isNaN(integer) ? undefined : integer)
    }
    else if(typeof value){
        return value + suffix;
    }
}