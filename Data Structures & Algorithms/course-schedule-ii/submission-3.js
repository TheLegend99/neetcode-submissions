class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const result = [];
        const inDegrees = new Array(numCourses).fill(0);
        const dependents = Array.from({length: numCourses}, ()=> []);
        const q = [];
        for (const [course, pre] of prerequisites){
            inDegrees[course]++;
            dependents[pre].push(course);
        }
        for (let i = 0; i < numCourses; i++){
            if (inDegrees[i] === 0) q.push(i);
        }
        let head = 0;
        while (head < q.length){
            const cur = q[head];
            head++;
            result.push(cur);
            for (const course of dependents[cur]){
                inDegrees[course]--;
                if (inDegrees[course] === 0) q.push(course);
            }
        }
        return result.length === numCourses ? result : [];
    }
}
