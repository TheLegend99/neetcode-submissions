class WordDictionary {
    trie
    constructor() {
        this.trie = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        const helper = function(idx, node){
            if (idx === word.length){
                node["word"] = true;
                return;
            }
            if (!(word[idx] in node)){
                node[word[idx]] = {};
            }
            helper(idx + 1, node[word[idx]]);
        }
        helper(0, this.trie);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const helper = function(idx, node){
            if (idx === word.length){
                return node["word"] === true;
                
            }
            if (word[idx] !== "."){
                if (!(word[idx] in node)) return false;
                return helper(idx+1, node[word[idx]]);
            } else {
                for (let key in node){
                    if (key === "word") continue;
                    if (helper(idx+1, node[key])){
                        return true;
                    }
                }
                return false;
            }
        }
        return helper(0, this.trie);
    }
}
