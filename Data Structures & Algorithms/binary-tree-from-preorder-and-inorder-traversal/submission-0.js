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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        return this.helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
    }

    helper(preorder, preStart, preEnd, inorder, inStart, inEnd){
        if (preStart > preEnd || inStart > inEnd) return null;
        const node = new TreeNode(preorder[preStart]);
        let inNodeIdx = -1; 
        for (let i = inStart; i <= inEnd; i ++){
            if (inorder[i] === preorder[preStart]) {
                inNodeIdx = i;
                break;
            }
        }
        const leftLength = inNodeIdx - inStart;
        if (leftLength > 0){
            node.left = this.helper(preorder, preStart+1, preStart + leftLength, inorder, inStart, inNodeIdx - 1);
        }
        const rightLength = inEnd - inNodeIdx;
        if (rightLength > 0){
            node.right = this.helper(preorder, preEnd - rightLength+1, preEnd, inorder, inNodeIdx + 1, inEnd);
        }
        return node;


    }
}
