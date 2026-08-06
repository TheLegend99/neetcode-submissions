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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const str = [];
        const dfs = function(node, str){
            if (!node) {
                str.push('null');
                return;
            }
            str.push('' + node.val);
            dfs(node.left, str);
            dfs(node.right, str);
        }
        dfs(root, str);
        return str.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let idx = 0;
        const vals = data.split(",");
        const dfs = function(){
            if (vals[idx] === 'null'){
                idx++;
                return null;
            }
            const node = new TreeNode(Number(vals[idx]));
            idx++;
            node.left = dfs(vals, idx);
            node.right = dfs(vals, idx);
            return node;
        }
        return dfs();
    }
}
