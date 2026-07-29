// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const nodeIdxMap = new Map();
        const nodeArr = [];
        
        let cur = head;
        let idx = 0;
        let cur2 = null;
        while (cur){
            nodeIdxMap.set(cur, idx);
            cur2 = new Node(cur.val);
            nodeArr.push(cur2);
            cur = cur.next;
            idx++;
        }
        nodeIdxMap.set(null, idx);
        nodeArr.push(null);
        cur = head;
        idx = 0;
        while (cur){
            const nextIdx = nodeIdxMap.get(cur.next);
            const randomIdx =  nodeIdxMap.get(cur.random);
            const node = nodeArr[idx];
            node.next = nodeArr[nextIdx];
            node.random = nodeArr[randomIdx];
            cur = cur.next;
            idx++;
        }
        return nodeArr[0];
    }
}
