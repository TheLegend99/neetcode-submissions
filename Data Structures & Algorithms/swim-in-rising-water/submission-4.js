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
        return v === u;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        // kruskal
        // we use kruskal because kruskal check the connectivity fast by using DSU;
        const n = grid.length;
        const dsu = new DSU(n * n);
        const positions = [];
        for (let i = 0 ; i < n; i++){
            for (let j = 0; j < n; j++){
                positions.push([grid[i][j], i , j]);
            }
        }
        positions.sort((a, b)=> a[0] - b[0]);
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (const [t, x, y] of positions){
            for (let i = 0; i < 4; i++){
                const nextX = x + dirs[i][0];
                const nextY = y + dirs[i][1];
                if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || grid[nextX][nextY] > t) continue;
                dsu.join(x*n+y, nextX * n + nextY);
            }
            if (dsu.isSame(0, n * n - 1)) return t;
        }
        return - 1;




    }
}
