class Twitter {
    private Map<Integer, Set<Integer>> followeeMap;
    private int timestamp;
    private Map<Integer, List<int[]>> tweetMap;

    public Twitter() {
        timestamp = 0;
        followeeMap = new HashMap<>();
        tweetMap = new HashMap<>();
    }
    
    public void postTweet(int userId, int tweetId) {
        if (!tweetMap.containsKey(userId)){
            tweetMap.put(userId, new ArrayList<>());
        }
        tweetMap.get(userId).add(new int[]{tweetId, timestamp});
        timestamp++;
    }
    
    public List<Integer> getNewsFeed(int userId) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        Set<Integer> followees = new HashSet<>(followeeMap.getOrDefault(userId, Collections.emptySet()));
        followees.add(userId);
        
        for (int followee : followees){
            List<int[]> tweets = tweetMap.getOrDefault(followee, Collections.emptyList());
            for (int i = 0; i < Math.min(tweets.size(), 10); i++){
                minHeap.offer(tweets.get(tweets.size() - 1- i ));
                if (minHeap.size() > 10) minHeap.poll();
            }
        }
        List<Integer> result = new ArrayList<>();
        while(minHeap.size() > 0){
            result.addFirst(minHeap.poll()[0]);
        }
        return result;
        
    }
    
    public void follow(int followerId, int followeeId) {
        if (!followeeMap.containsKey(followerId)){
            followeeMap.put(followerId, new HashSet<>());
        }
        followeeMap.get(followerId).add(followeeId);
        
    }
    
    public void unfollow(int followerId, int followeeId) {
        Set<Integer> followees = followeeMap.get(followerId);
        followees.remove(followeeId);
    }
}
