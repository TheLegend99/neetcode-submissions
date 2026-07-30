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
   
    diameterOfBinaryTree(root) {
        this.res= 0;
        this.helper(root);
        return this.res;
        
    }
    helper(node){
        if(!node){
            return 0;
        } else {
            const left = this.helper(node.left);
            const right = this.helper(node.right);
            this.res = Math.max(this.res, left + right);
            return Math.max(left, right) + 1;
        }
    }
}
