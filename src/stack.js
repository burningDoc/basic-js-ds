const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) { 
    const node = new Element(value);
    if (this.head){ // If element already exist 
      node.next = this.head;
      this.head = node;
    } else { // If it first  element
      this.head = node;
    }
  }

  pop() {
    let current = this.head;
    this.head = this.head.next;
    return current.value
  }

  peek() {
    return this.head.value
  }
}

module.exports = {
  Stack
};
