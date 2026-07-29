/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const dummy = new ListNode();
        let cur = dummy;
        
        
        while(true){
            let min = -1;
            for (let i = 0; i < lists.length; i++){
                if (lists[i]){
                    if (min === - 1 || lists[i].val <= lists[min].val ){
                        min = i;
                    }
                }
            }
            if (min === -1) break;
            cur.next = lists[min];
            cur = lists[min];
            lists[min] = lists[min].next;
        }
        return dummy.next;
    }
}
