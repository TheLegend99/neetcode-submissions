class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        let sizeList = [];
        let result = [];
        for (const str of strs){
            sizeList.push(str.length);
        }
        for (const size of sizeList){
            result.push(String(size));
            result.push(",");
        }
        result.push('#');
        result.push(...strs);
        return result.join("");

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        let i = 0;
        while (str[i] !== "#"){
            i++;
        }
        const sizeString = str.substring(0, i);
        const sizeList = sizeString.split(",");
        const result = [];
        i++;
        for (const size of sizeList){
            if (size !== ''){
                result.push(str.substring(i, i+parseInt(size)));
                i+= parseInt(size)
            }
           
        }
        return result;

    }
}
