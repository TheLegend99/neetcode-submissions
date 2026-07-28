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
     * @return {void}
     */
    reorderList(head) {
        let fast = head, slow = head;
        while (fast!== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        let prev = null, cur = slow.next, temp = null;
        while (cur !== null){
            temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
        }
        slow.next = null;
        let l = head, r = prev;
        let temp1 = null, temp2 = null;
        while (r !== null ){
            temp1 = l.next;
            l.next = r;
            l = temp1;
            temp2 = r.next;
            r.next = l;
            r = temp2;
           
        }
       
      

    }
}
