/**
 * @author Joseph Eniojukan
 * @description This function generates a Mongo DB object identity.
 * @returns {string} Automatically generated Mongo DB object identity.
 */
export function mongoId() {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};