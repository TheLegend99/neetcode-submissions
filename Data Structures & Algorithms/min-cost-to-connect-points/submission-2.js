class DSU{
    constructor(n){
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
    }
    isSame(u, v){
        u = this.find(u);
        v = this.find(v);
        return u === v;
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        // kruskal
        const n = points.length;
        const dsu = new DSU(n);
        const edges = [];
        for (let i = 0; i < n; i++){
            for (let j = i + 1; j < n; j++){
                edges.push([i, j, Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])]);
            }
        }
        let result = 0;
        edges.sort((a, b) => a[2] - b[2]);
        for (const [u, v, w] of edges){
            if (!dsu.isSame(u, v)){
                dsu.join(u, v);
                result += w;
            }
        }
        return result;
    }
}
