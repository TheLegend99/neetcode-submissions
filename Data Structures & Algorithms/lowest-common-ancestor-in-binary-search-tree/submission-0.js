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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (p.val > q.val) return this.lowestCommonAncestor(root, q, p);
        if (root === null){
            return null;
        }
        if (root === p || root === q) return root;
        const left = this.lowestCommonAncestor(root.left, p, q);
        const right = this.lowestCommonAncestor(root.right, p, q);
        if ( left && right){
            return root;
        }
        if (!left && !right ){
            return null;
        } else if (left){
            return left;
        } else {
            return right;
        }
    }
}
