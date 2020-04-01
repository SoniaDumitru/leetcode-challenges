// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1, l2) => {
  let pointer1 = l1;
  let pointer2 = l2;
  let num1 = 0;
  let num2 = 0;
  let carry = 0;

  let solution = new ListNode(0); // return new link list
  let current = solution;

  while (pointer1 || pointer2){ // while the nodes exist
    num1 = (pointer1) ? pointer1.val : 0;
    num2 = (pointer2) ? pointer2.val : 0;

    if (num1 + num2 + carry > 9) {
      current.next = new ListNode(num1 + num2 + carry - 10);
      current = current.next;
      carry = 1;
    } else {
      carry = 0;
    }
    if (pointer1) {
      pointer1 = pointer1.next;
    }
    if (pointer2) {
      pointer2 = pointer2.next;
    }
    if (carry) {
      current.next = new ListNode(carry);
      return solution.next;
    }
  }
}
