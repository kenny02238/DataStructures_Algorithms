class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length += 1;
  }
  pop() {
    if (this.head === null) {
      console.log("Nothing in this linked list.");
      return;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length -= 1;
      return temp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length -= 1;
      console.log(temp);

      return temp;
    }
  }
  shift() {
    if (!this.head) {
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length -= 1;

      return temp;
    } else {
      let currentNode = this.head;
      this.head = currentNode.next;
      this.length -= 1;
      return currentNode;
    }
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length += 1;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length += 1;
    }
  }
  insertAt(value, index) {
    let newNode = new Node(value);
    if (index > this.length || index < 0) {
      console.log("Your input index is out of the range of this linked list.");
      return null;
    } else if (index === 0) {
      this.unshift(newNode);
    } else if (index === this.length) {
      this.push(newNode);
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length += 1;
      return;
    }
  }
  removeAt(index) {
    if (index < 0 || index > this.length) {
      console.log("Your input index is out of the range of this linked list.");
    } else if (index === 0) {
      let result = this.shift();
      return result;
    } else if (index === this.length - 1) {
      let result = this.pop();
      return result;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= index - 1; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.length -= 1;
      return temp;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      console.log("Your input index is out of the range of this linked list.");
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }
  printAll() {
    if (this.head === null) {
      console.log("Nothing in this linked list.");
      return;
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

const test = new LinkedList();
