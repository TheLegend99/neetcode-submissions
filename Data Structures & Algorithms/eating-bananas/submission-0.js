class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    minEatingSpeed(piles, h) {
        let maxBanana = 0;
        const n = piles.length;
        for (let i = 0; i < n; i++){
            maxBanana = Math.max(maxBanana, piles[i]);
        }
        const withinTime = function(rate){
            let time = 0;
            for (let i = 0; i < n; i++){
                time += Math.ceil(piles[i] / rate);
            }
            return time <= h;
        }
        let l = 1, r= maxBanana, mid = -1;
        while (l < r){
           mid = Math.floor( (r + l)/2);
           if (withinTime(mid)){
                r = mid;
           } else{
                l = mid + 1;
           }
        }
        return l;
    }
}
