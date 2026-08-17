class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const inDegreeMap = new Map();
        const courseMap = new Map();
        const q = [];
        const result = [];
        for (let i = 0; i < numCourses; i++){
            inDegreeMap.set(i, 0);
            courseMap.set(i, []);
        }
        for (const [course, pre] of prerequisites){
            inDegreeMap.set(course, inDegreeMap.get(course)+1);
            courseMap.get(pre).push(course);
        }
        for (let i = 0; i < numCourses; i++){
            if (inDegreeMap.get(i) === 0)q.push(i);
            
        }
        let head = 0;
        while(head < q.length){
            const cur = q[head];
            head++;
            result.push(cur);
            for (const course of courseMap.get(cur)){
                inDegreeMap.set(course, inDegreeMap.get(course) - 1);
                if (inDegreeMap.get(course) === 0) q.push(course);
            }
        }
        return result.length === numCourses;


    }
}
