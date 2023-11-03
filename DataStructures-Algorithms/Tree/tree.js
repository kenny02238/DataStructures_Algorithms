const Compare = {
  less: -1,
  bigger: 1,
  equ: 0,
};

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  compareFn(a, b) {
    if (a === b) {
      return Compare.equ;
    }
    return a > b ? Compare.bigger : Compare.less;
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.less) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}
