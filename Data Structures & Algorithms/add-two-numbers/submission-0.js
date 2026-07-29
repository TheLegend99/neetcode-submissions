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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let num1 = -1, num2 = -1;
        let head1 = l1, head2 = l2;
        const dummy = new ListNode();
        let prev = dummy;
        let cur = null;
        while (head1 || head2){
            if (!head1){
                num1 = 0;
            } else {
                num1 = head1.val;
                head1 = head1.next;
            }
            if (!head2){
                num2 = 0;
            } else {
                num2 = head2.val;
                head2 = head2.next;
            }
            const curSum = carry + num1 + num2;
            cur = new ListNode( curSum % 10);
            carry = curSum >= 10 ? 1 : 0;
            prev.next = cur;
            prev = cur;
        }
        if (carry === 1){
            prev.next = new ListNode(1);
        }
        return dummy.next;
    }
}
