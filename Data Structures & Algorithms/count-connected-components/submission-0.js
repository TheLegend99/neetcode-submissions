class DSU{
    constructor(n){
        this.count = n;
        this.father = new Array(n).fill(0);
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
        if (u === v) return;
        this.father[u] = v;
        this.count--;
    }
    isSame(u, v){
        u = this.find(u);
        v = this.find(v);
        return v === u;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const dsu = new DSU(n);
        for (const [u, v] of edges){
            dsu.join(u ,v);
        }
        return dsu.count;

    }
}
