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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];
        const q = [];
        if (root) q.push(root);
        while (q.length){
            const size = q.length;
            for (let i = 0; i < size; i++){
                const cur = q.shift();
                if (i === size - 1) result.push(cur.val);
                if (cur.left) q.push(cur.left);
                if (cur.right) q.push(cur.right);
            }
        }
        return result;
    }
}
