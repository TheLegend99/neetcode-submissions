class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const graph = new Map();
        const inDegree = new Map();
        for (const word of words) {
            for (const char of word) {
                if (!graph.has(char)) graph.set(char, []);
                if (!inDegree.has(char)) inDegree.set(char, 0);
            }
        }
        for (let i = 1; i < words.length; i++){
            const pre = words[i-1];
            const cur = words[i];
            const len1 = pre.length;
            const len2 = cur.length;
            if (len1 > len2 && pre.slice(0, len2) === cur) return "";
            for (let j = 0; j < Math.min(len1, len2); j++){
                if (pre[j] !== cur[j]){
                    if (!graph.has(pre[j])){
                        graph.set(pre[j], []);
                    }
                    graph.get(pre[j]).push(cur[j]);
                    if (!inDegree.has(cur[j])){
                        inDegree.set(cur[j], 0);
                    }
                    inDegree.set(cur[j], inDegree.get(cur[j]) + 1);
                    break;
                }
            }
        }
        const chars = Array.from(graph.keys());
        const q = [];
        let head = 0;
        let result = "";
        for (let i = 0; i < chars.length; i++){
            if (inDegree.get(chars[i]) === 0) {
                q.push(chars[i]);
              
            }
        }
        while (head < q.length){
            const cur = q[head];
            head++;
            result += cur;
            for (const char of graph.get(cur)){
                const count =  inDegree.get(char) - 1;
                inDegree.set(char, count);
                if (count === 0){
                    q.push(char);
                }

            }
        }
        if (result.length === chars.length) {
            return result;
        }
        return "";
    }
}
