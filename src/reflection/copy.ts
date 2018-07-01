import { properties, isPrimitive, clear, clone } from "../.";

export function copy(object: Object, subject: Object){
    let keys = properties(object);

    keys.forEach(key => {
        
        let a = subject[key];
        let b = object[key];
        let desc = Object.getOwnPropertyDescriptor(object, key);

        if (isPrimitive(b)) {
            assign(subject, key, b);
        }


        else if (Array.isArray(b)) {

            if (Array.isArray(a)) {
                clear(a);
                b.forEach(item => a.push(clone(item)));
            }

            else if (typeof a === 'object') {
                if (b.length > 0)
                    copy( b[0], a);
            }

            else if (typeof a === 'undefined') {
                a = [];
                //a.type = b.type
                b.forEach(item => a.push(clone(item)));
                subject[key] = a;
            }
        }

        else if (typeof b === 'object') {
            if (Array.isArray(a)) {
                clear(a);
                a.push(clone(b));
            }

            else if (typeof a === 'object') {
                copy(b,a);
            }
            else if (typeof a === 'undefined') {
                subject[key] = clone(b);
            }
        }

        else if(typeof b === 'function'){
            if(b.name)
                assign(subject, key, b);
        }
    });
}

function assign(subject: any, key: string, value: any) {
    try{
        subject[key] = value;
    }
    catch(err){
        let desc = Object.getOwnPropertyDescriptor(subject, key);
        console.error(err);
    }
}