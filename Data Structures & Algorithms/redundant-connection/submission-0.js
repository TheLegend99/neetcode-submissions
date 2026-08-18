class DSU{
    constructor(n){
        this.father = new Array(n+1).fill(0);
        for (let i = 1; i <= n; i++ ){
            this.father[i] = i;
        }
    }
    find(u){
        if (this.father[u] === u) return u;
        return this.father[u] = this.find(this.father[u]);
    }
    join(u, v){
        u = this.find(u);
        v = this.find(v);
        if (u === v) return;
        this.father[u] = v;
    }
    isSame(u, v){
        u = this.find(u);
        v = this.find(v);
        return u === v;
    }
}
class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const dsu = new DSU(n);
        for (const [u, v] of edges){
            if (dsu.isSame(u, v)) return [u, v];
            dsu.join(u, v);
        }

    }
}
