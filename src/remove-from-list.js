const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * } 
 */
function removeKFromList(l, k) {
  let arr = []; // Create arr for saving our chain;
  while (l.next){ // If next doesn't equal null
    if(l.value === k) { // Check if first value equal k, delete this node
      let previous = l;
      l = l.next;
      previous.next = null;
    }
    if (l.next.value === k) { //If next node value equal k
      if (l.next.next === null) { // For adequate delete last node
        l.next = null; 
      } else if (l.next.next.value === k) {
        l.next = l.next.next.next;
      } else {  
        l.next = l.next.next; 
      }
    }
    arr.push(l)
    console.log(l);
    if (l.next === null) {break}
    l = l.next;
  }
  return arr[0]
}

module.exports = {
  removeKFromList
};
