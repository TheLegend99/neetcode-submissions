class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const preMap = new Map();
        for (let i = 0; i < numCourses; i++){
            preMap.set(i, []);
        }
        for (const [course, pre] of prerequisites){
            preMap.get(course).push(pre);
        }
        const visited = new Set();
        const path = [];
        const safe = new Set();
        // can finish
        const dfs = function(course){
            if (visited.has(course)) return false;
            if (safe.has(course)) {
                return true
            };
            visited.add(course);
            for (const pre of preMap.get(course)){
                if (!dfs(pre)) return false;
            }
            preMap.set(course, []);
            safe.add(course);
            visited.delete(course);
            path.push(course);
            return true;
        }
        for (let i = 0; i < numCourses; i++){
            if (!dfs(i)) return [];
        }
        return path;
    }
}
