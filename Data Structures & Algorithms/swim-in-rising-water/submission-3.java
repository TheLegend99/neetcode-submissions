class Solution {
    public int swimInWater(int[][] grid) {
        int n = grid.length;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a , b) -> a[0] - b[0]);
        int[][] minDist = new int[n][n];
        int max = (int) Math.pow(n, 2) + 1;
        for (int i = 0; i < n; i++){
            for (int j = 0; j < n; j++){
                minDist[i][j] = max;
            }
        }
        boolean[][] visited = new boolean[n][n];
        minDist[0][0] = grid[0][0];
        pq.offer(new int[]{grid[0][0], 0, 0});
        int[][] dirs = {
            {1, 0}, {-1, 0}, {0, 1}, {0, -1}
        };
        while (!pq.isEmpty()){
            int[] cur = pq.poll();
            if (cur[1] == n - 1 && cur[2] == n - 1) return cur[0];
            if (visited[cur[1]][cur[2]]) continue;
            visited[cur[1]][cur[2]] = true;
            for (int i = 0;  i < 4; i++){
                int nextX = cur[1] + dirs[i][0];
                int nextY = cur[2] + dirs[i][1];
                if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || visited[nextX][nextY]) continue;
                int cand = Math.max(cur[0], grid[nextX][nextY]);
                if (cand < minDist[nextX][nextY]){
                    minDist[nextX][nextY] = cand;
                    // visited[nextX][nextY] = true;
                    pq.offer(new int[]{cand, nextX, nextY});
                }
            }
        }
        return minDist[n-1][n-1];
    }
}
