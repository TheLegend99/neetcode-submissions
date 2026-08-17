class DSU{
    constructor(n){
       
        this.father = new Array(n);
        for (let i = 0; i < n; i++){
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
        if (u === v) return ;
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
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;
        const dsu = new DSU(n);
        for (const [u,v] of edges){
            if (dsu.isSame(u, v)) return false;
            dsu.join(u, v);
        }
        return true;
    }
}
