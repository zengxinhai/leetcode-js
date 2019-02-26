/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
Intuition:
1. We can use quick sort for this problem
2. Just replace the begin, end index with the head, tail node reference
*/
const oneTimeQuickSort = (begin, end) => {
  let rightMostSmallNode = begin;
  let compareNode = begin.next;
  while(compareNode !== end) {
    if (compareNode.val < begin.val) {
      if (rightMostSmallNode.next.val !== compareNode.val) {
        [rightMostSmallNode.next.val, compareNode.val] = [compareNode.val, rightMostSmallNode.next.val];
      }
      rightMostSmallNode = rightMostSmallNode.next;
    }
    compareNode = compareNode.next;
  }
  [rightMostSmallNode.val, begin.val] = [begin.val, rightMostSmallNode.val];
  return rightMostSmallNode;
};

const sortList = (begin, end = null) => {
  if (begin === null || begin === end) return begin;
  const someNode = oneTimeQuickSort(begin, end);
  sortList(begin, someNode);
  sortList(someNode.next, end);
  return begin;
};
