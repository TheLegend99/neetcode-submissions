class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const neighbors = Array.from({length: n}, ()=>[]);
        for (const [u,v] of edges){
            neighbors[u].push(v);
            neighbors[v].push(u);
        }
        const seen = new Set();
        const dfs = function(node, parent){
            if (seen.has(node)) return false;
            seen.add(node);
            for (const neighbor of neighbors[node]){
                if (neighbor === parent) continue;
                if (!dfs(neighbor, node)) return false; 
            }
            return true;
        }
        return dfs(0, 0) && seen.size === n ;
    }
}
