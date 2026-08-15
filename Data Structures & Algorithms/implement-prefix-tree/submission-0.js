class PrefixTree {
    prefixTree;
    constructor() {
        this.prefixTree = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        helper(0, this.prefixTree);
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const helper = function(idx, node){
            if (idx === word.length && "word" in node && node["word"] === true){
                return true;
            }
            if (!(word[idx] in node)) return false;
            return helper(idx + 1 , node[word[idx]]);
        }
        return helper(0, this.prefixTree);
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        const helper = function(idx, node){
            if (idx === prefix.length){
                return true;
            }
            if (!(prefix[idx] in node)) return false;
            return helper(idx + 1 , node[prefix[idx]]);
        }
        return helper(0, this.prefixTree);
    }
}
