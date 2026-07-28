class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        } 
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key) || this.keyStore.get(key).length === 0) return "";
        const arr = this.keyStore.get(key);
        const n = arr.length;
        if (arr[0][1] > timestamp) return "";
        if (n === 1 && arr[0][1] <= timestamp) return arr[0][0]; 
        let l = 0, r = n;
        
        while (l < r) {
            const mid = l + Math.floor((r - l)/2);
            if (arr[mid][1] <= timestamp){
                l = mid + 1;
            } else{
                r = mid;
            }
        }
        return arr[r-1][0];
    }
}
