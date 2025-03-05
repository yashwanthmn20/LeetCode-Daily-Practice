/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify list creation
    let current = dummyHead;
    let carry = 0;
    
    let tempL1 = l1;
    let tempL2 = l2;
    
    while (tempL1 !== null || tempL2 !== null || carry > 0) {
        let val1 = tempL1 ? tempL1.val : 0;
        let val2 = tempL2 ? tempL2.val : 0;
        
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); 

        current.next = new ListNode(sum % 10); 
        current = current.next;
        
        
        if (tempL1) tempL1 = tempL1.next;
        if (tempL2) tempL2 = tempL2.next;
    }
    
    return dummyHead.next; 
};
