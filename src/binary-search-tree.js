const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.begin = null;
  }

  root() {
    return this.begin
  }

  add(data) {
    this.begin = subAdd(this.begin, data);

    function subAdd(node, data){
      if(!node) return new Node(data); 

      if(node === data) return node;

      if(data < node.data) {
        node.left = subAdd(node.left, data);
      } else {
        node.right = subAdd(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.begin, data);

    function hasNode (node, data){
      if(!node) return false 
      if(node.data === data) return true
      if(data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.begin, data);

    function findNode (node, data) {
      if(!node) return null 
      if(node.data === data) return node
      if(data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.begin = removeData(this.begin, data);

    function removeData (node, data){
      if(!node) return null;

    if (data < node.data){ 
      node.left = removeData(node.left, data)
      return node;
    } else if (data > node.data){
      node.right = removeData(node.right, data)
      return node;
    } else {
      if(!node.left && !node.right) return null;
      if(!node.left) {
        node = node.right;
        return node;
      }
      if(!node.right) {
        node = node.left;
        return node;
      }
      let maxFromLeft = node.left;
      while(maxFromLeft.right){
        maxFromLeft = maxFromLeft.right;
      }
      node.data = maxFromLeft.data;
      node.left = removeData(node.left, maxFromLeft.data);
      return node;
    }
  }
}

  min() {
    if(!this.begin) return 
    let node = this.begin;
    while (node.left){
      node = node.left
    }
    return node.data
  }

  max() {
    if(!this.begin) return 
    let node = this.begin;
    while (node.right){
      node = node.right
    }
    return node.data
  }
}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// console.log(tree.remove(54))

module.exports = {
  BinarySearchTree
};