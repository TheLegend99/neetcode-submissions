class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> q = new PriorityQueue<>((a ,b) -> b - a);
        for (int i = 0; i < stones.length; i++){
            q.offer(stones[i]);
        }
        while (q.size() >= 2){
            Integer a = q.poll();
            Integer b = q.poll();
            if (a - b > 0 ) q.offer(a - b);
        }
        return q.size() == 0? 0 : q.peek();
        
    }
}
