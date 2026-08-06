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
    max;
    maxPathSum(root) {
        this.max = - Infinity;
        this.helper(root);
        return this.max;
    }

    helper(node){
        if (!node) return 0;
        
        const left = this.helper(node.left);
        const right = this.helper(node.right);
        this.max = Math.max(this.max, left + right + node.val, left + node.val, right + node.val, node.val);
        return Math.max(left + node.val, right + node.val, node.val);
    }
}
