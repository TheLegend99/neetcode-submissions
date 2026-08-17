class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const neighbors = Array.from({length: n}, ()=> []);
        const seen = new Set();
        for (const [u, v] of edges){
            neighbors[u].push(v);
            neighbors[v].push(u);
        }
        const q = [];
        let head = 0;
        q.push([0, -1]);
        seen.add(0);
        while (head < q.length){
            const [cur, parent] = q[head];
            head++;
            for (const neighbor of neighbors[cur]){
                if (neighbor === parent) continue;
                if (seen.has(neighbor)) return false;
                seen.add(neighbor);
                q.push([neighbor,cur]);
            }
        }
        return seen.size === n;
    }
}
