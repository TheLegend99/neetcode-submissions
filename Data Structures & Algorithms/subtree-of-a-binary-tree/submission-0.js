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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;
        const left = this.isSubtree(root.left, subRoot);
        if (left) return true;
        const right = this.isSubtree(root.right, subRoot);
        if (right) return true;
        return this.sameTree(root, subRoot);

    }
    sameTree(node1, node2){
        if (!node1 && !node2){
            return true;
        } else if (!node1){
            return false;
        } else if (!node2){
            return false;
        } else {
            const left = this.sameTree(node1.left, node2.left);
            if (!left) return false;
            const right = this.sameTree(node1.right, node2.right);
            if (!right) return false;
            return node1.val === node2.val; 
        }
    }
}
