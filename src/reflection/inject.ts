import { Argumenter } from "@joejukan/argumenter";
import { clone, clear, copy } from ".";

export function inject(subject: Object, type: {new()});
export function inject(array: Array<any>, type: {new()});
export function inject(...args) {
    let argue = new Argumenter(args);
    let subjects = argue.array;
    let subject = argue.object;
    let type: {new()} = argue.function;

    if(subjects){
        let array = clone(subjects);
        clear(subjects);
        array.forEach( item => {
            let child = new type();            
            copy(item, child);
            subjects.push(child);
        })
    }

    else if(subject){
        Object.setPrototypeOf(subject, type.prototype);
    }
}