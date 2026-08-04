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
     * @return {number}
     */
    count;
    goodNodes(root) {
        this.count = 0;
        this.helper(root, -Infinity);
        return this.count;
    
    }

    helper(node, max){
        if (!node) return;
        if (node.val >= max) this.count++;
        const newMax = Math.max(max, node.val);
        this.helper(node.left, newMax);
        this.helper(node.right, newMax);
    }
}
