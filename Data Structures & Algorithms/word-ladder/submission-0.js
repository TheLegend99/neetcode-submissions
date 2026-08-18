class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
        if (!wordSet.has(endWord) || beginWord.length !== endWord.length) return 0;
        const visited = new Map();
        visited.set(beginWord, 1);
        const q = [];
        q.push(beginWord);
        let head = 0;
        while(head < q.length){
            const word = q[head];
            head++;
            if (word === endWord) return visited.get(word);
            const wordArray = word.split("");
            for (let i = 0; i < word.length; i++){
                const oldChar = wordArray[i];
                for (let j = 0; j < 26; j++){                
                    const newChar = String.fromCharCode('a'.charCodeAt()+j)
                    if (oldChar === newChar) continue;
                    wordArray[i] = newChar;
                    const newWord = wordArray.join("");
                    if (wordSet.has(newWord) && !visited.has(newWord)){
                        visited.set(newWord, visited.get(word) + 1);
                        q.push(newWord);
                    }  
                }
                wordArray[i] = oldChar;
            }
        }
        return 0;



    }
}
