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
        if (!root) return "";
        const q = [root];
        const res = [];
        let head = 0;
        while (head < q.length){
            const cur = q[head];
            head++;
            if (!cur){
                res.push("null")
                
            } else {
                res.push('' + cur.val);
                q.push(cur.left);
                q.push(cur.right);
            }
        }
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data || data === '') return null;
        const vals = data.split(",");
        const root = new TreeNode(Number(vals[0]));
        const q = [root];
        let head = 0, i = 1;
        while (head < q.length){
            const node = q[head];
            head++;
            const l = vals[i];
            i++;
            if (l !== 'null'){
                node.left = new TreeNode(Number(l));
                q.push(node.left);
            }
            const r = vals[i];
            i++;
            if (r !== 'null'){
                node.right = new TreeNode(Number(r));
                q.push(node.right);
            }
        }
        return root; 
        
    }
}
