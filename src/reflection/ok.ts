export function ok(value): boolean {
    if(typeof value === 'undefined'){
        return false;
    }
    
    else if (value === null){
        return false;
    }
        

    else if (typeof value === 'number') {
        return true;
}
    else if (typeof value === 'boolean') {
        return value;
    }

    else if (typeof value === 'string') {
        return value.trim().length > 0;
    }

    else if(typeof value === 'object') {
        if (value === NaN){
            return false;
        }
        return true; 
    }

    return true;
}