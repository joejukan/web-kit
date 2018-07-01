import {isBrowser} from ".";
/**
 * @author Joseph Eniojukan
 * @description This function evaluates a string to determine if it is in XML format.
 * @param content The string to determine if it is in XML format.
 * @returns {boolean} true if the string is in XML format.
 */
export function isXML(content: string): boolean{
    if(isBrowser()){
        let parser = new DOMParser();
        let doc = parser.parseFromString(content, "text/xml");

        let element = doc.firstElementChild;

        if(element){
            return element.tagName !== 'parsererror';
        }

        return false;
    }
    else
        throw new Error("method not supported in a node environment");
}