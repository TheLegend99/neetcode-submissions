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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.helper(root, -Infinity, Infinity);

    }
    helper(node, min, max){
        let left = true;
        let right = true;
        if (node.val <= min || node.val >= max) return false;
        if (node.left){
            left = this.helper(node.left, min, Math.min(node.val, max));
        }
        if (node.right){
            right = this.helper(node.right, Math.max(min, node.val), max);
        }
        return left && right;
    }

    
}
