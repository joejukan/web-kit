/**
 * @author Joseph Eniojukan
 * @description This function evaluates a string and determines if the string is in a JSON format.
 * @param content The string to evaluate if it is in JSON format.
 * @returns {boolean} true if string is in JSON format.
 */
export function isJSON(content: string): boolean{
    try{
        JSON.parse(content);
        return true;
    }
    catch(e){}
    return false;
}