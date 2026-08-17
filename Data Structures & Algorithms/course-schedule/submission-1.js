class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();
        for (let i = 0; i < numCourses; i++){
            preMap.set(i, []);
        }
        for (const [cur, pre] of prerequisites){
            preMap.get(cur).push(pre);
        }
        const seen = new Set();
        const dfs = function(course){
            if (seen.has(course)) return false;
            if (preMap.get(course).length === 0) return true;
            seen.add(course);
            for (const pre of preMap.get(course)){
                if (!dfs(pre)) return false;
            }
            seen.delete(course);
            preMap.set(course,[]);
            return true;
        }
        for (let i = 0; i < numCourses; i++){
            if (!dfs(i)) return false;
        }
        return true;
    }
}
