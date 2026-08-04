/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        const q = [];
        if (root) q.push(root);
        while (q.length > 0){
            const size = q.length;
            const list = [];
            for (let i = 0; i < size; i++){
                const cur = q.shift();
                list.push(cur.val);
                if (cur.left) q.push(cur.left);
                if (cur.right) q.push(cur.right);
            }
            result.push(list);
        }
        return result; 
    }
}
