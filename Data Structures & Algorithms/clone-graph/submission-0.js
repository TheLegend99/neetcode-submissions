/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const map = new Map();
        const dfs = function(node){
            if (node === null) return null;
            if (!map.has(node)){
                const copyNode = new Node(node.val);
                map.set(node, copyNode);
                if (node.neighbors.length > 0){
                    for (const neighbor of node.neighbors){
                        const copyNeighbor = dfs(neighbor);
                        map.get(node).neighbors.push(copyNeighbor);
                    }
                }
            }
            
            return map.get(node);
        }
        return dfs(node);
    }
}
