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
  // --------------inOrder--------------
  inOrderMap(callback) {
    this.inOrderMapNode(this.root, callback);
  }
  inOrderMapNode(node, callback) {
    if (node !== null) {
      this.inOrderMapNode(node.left, callback);
      callback(node.key);
      this.inOrderMapNode(node.right, callback);
    }
  }
  // --------------preOrder--------------
  preOrderMap(callback) {
    this.preOrderMapNode(this.root, callback);
  }
  preOrderMapNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderMapNode(node.left, callback);
      this.preOrderMapNode(node.right, callback);
    }
  }
  // --------------postOrder--------------
  postOrderMap(callback) {
    this.postOrderMapNode(this.root, callback);
  }
  postOrderMapNode(node, callback) {
    if (node !== null) {
      this.postOrderMapNode(node.left, callback);
      this.postOrderMapNode(node.right, callback);
      callback(node.key);
    }
  }
}

const test = new BST();

test.insert(100);
test.insert(90);
test.insert(60);
test.insert(120);
test.insert(80);
test.inOrderMap((value) => console.log(value));
