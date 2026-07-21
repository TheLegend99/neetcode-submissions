class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a , b) -> b[0] - a[0]);

        int[] result = new int[nums.length - k + 1];
        for (int i = 0; i < k; i++){
            pq.add(new int[]{nums[i], i});
        }
        result[0] = pq.peek()[0];
        for (int i = k; i < nums.length; i++){
            pq.add(new int[]{nums[i], i});
            while(pq.peek()[1] <= i - k ){
                pq.remove();
            }
            result[i - k + 1] = pq.peek()[0];
        }
        return result;
    }
}
