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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy =  new ListNode();
        let cur3 = dummy;
        let cur1 = list1, cur2 = list2;
        while (cur1 || cur2){
            if (!cur1){
                cur3.next = cur2;
                break;
            } else if (!cur2){
                cur3.next = cur1;
                break;
            } else if (cur1.val <= cur2.val) {
                cur3.next = cur1;
                cur1 = cur1.next;
                cur3 = cur3.next;
            } else{
                cur3.next = cur2;
                cur2 = cur2.next;
                cur3 = cur3.next;
            }
        }
        return dummy.next;
    }
}
