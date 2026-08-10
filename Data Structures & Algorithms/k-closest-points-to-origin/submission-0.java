class Solution {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> q = new PriorityQueue<>((a, b) -> b[0] * b[0] + b[1] * b[1] - a[0]*a[0] - a[1]*a[1]);
        for (int i = 0; i < points.length; i++){
            q.offer(points[i]);
            if (q.size() > k) q.poll();
        }
        int[][] result = new int[k][2];
        for (int i = 0; i < k; i++){
            int[] cur = q.poll();
            result[i][0] = cur[0];
            result[i][1] = cur[1];
        }
        return result;


    }
}
