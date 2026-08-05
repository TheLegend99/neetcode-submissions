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
     * @param {number} k
     * @return {number}
     */
    count;
    kthSmallest(root, k) {
        this.count = 0;
        return this.helper(root, k);

    }
    helper(node, k){
        if (!node) return;
        
        const left = this.helper(node.left, k);
        this.count++;
        if (this.count === k) return node.val;
        const right = this.helper(node.right, k);
        return left || right;
    }
}
