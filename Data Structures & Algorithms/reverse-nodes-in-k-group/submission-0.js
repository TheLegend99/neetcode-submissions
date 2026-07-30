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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode();
        dummy.next = head;
        let groupPrev = dummy;
        while (true){
            let cur = groupPrev;
            // getting the kth of the group;
            for (let i = 0; i < k; i++){
                cur = cur.next;
                if(!cur) break;
            }
            //  group has less than k, leave as it is
            if (!cur){
                break;
            } else {
                // cur is the kth element of the current group
                let groupNext = cur.next;
                let groupCur = groupPrev.next;
                let prev = groupNext;
                // start doing the swap
                while(groupCur !== groupNext){
                    let temp = groupCur.next;
                    groupCur.next = prev;
                    prev = groupCur;
                    groupCur = temp;
                }
                let temp = groupPrev.next;
                groupPrev.next = cur;
                groupPrev = temp;

            }
        }
        return dummy.next;
    }
}
