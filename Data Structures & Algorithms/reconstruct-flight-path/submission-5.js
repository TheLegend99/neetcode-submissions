class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const result = [];
        const graph = new Map();
        tickets.sort().reverse();
        for (const [u, v] of tickets){
            if (!graph.has(u)){
                graph.set(u, []);
            }
            graph.get(u).push(v);
        }
        const dfs = function(node){
            while(graph.has(node) && graph.get(node).length > 0){
                dfs(graph.get(node).pop());
            }
            result.push(node);
        }
        dfs("JFK");
        return result.reverse();
    }
}