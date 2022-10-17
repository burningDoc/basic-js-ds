const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    const element = new Element(value);
    if (this.head){ // If element already exist 
      this.last.next = element;
      this.last = element;

    } else { // If it first  element
      this.head = element;
      this.last = element
    }  

  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    return current.value
  }
}


module.exports = {
  Queue
};
