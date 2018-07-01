/**
 * @author Joseph Eniojukan
 * @description This function generates a v4 UUID.
 * @returns {string} An automatically generated v4 UUID>
 */
export function uuid() {
    var d = new Date().getTime();
    var format = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    var result = format.replace(/[xy]/g,
        function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    return result;
};