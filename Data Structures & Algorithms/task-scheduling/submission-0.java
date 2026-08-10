class Solution {
    public int leastInterval(char[] tasks, int n) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a , b) -> b - a);
        Queue<int[]> q = new LinkedList<>();
        int[] freqs = new int[26];
        for (char task : tasks){
            freqs[task - 'A']++;
        }
        for (int i = 0; i < 26; i++){
            if (freqs[i] > 0){
                maxHeap.offer(freqs[i]);
            }
        }
        int time = 0;
        while (!q.isEmpty() || !maxHeap.isEmpty()){
            time++;
            if (maxHeap.isEmpty()){
                time = q.peek()[1];
            } else {
                int freq = maxHeap.poll() - 1;
                if(freq > 0){
                    q.offer(new int[]{freq, time+n});
                }
            }
            if (!q.isEmpty() && q.peek()[1] == time){
                maxHeap.offer(q.poll()[0]);
            }

        }
        return time;
    }
}
