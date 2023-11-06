class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    if (!this.values.length) {
      this.values.push(newNode);
      return true;
    }
    this.values.push(newNode);
    let newNodeIndex = this.values.length - 1;
    let parentNodeIndex = Math.floor((newNodeIndex - 1) / 2);
    while (
      parentNodeIndex >= 0 &&
      this.values[newNodeIndex].priority > this.values[parentNodeIndex].priority
    ) {
      let temp = this.values[newNodeIndex];
      this.values[newNodeIndex] = this.values[parentNodeIndex];
      this.values[parentNodeIndex] = temp;
      newNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor((newNodeIndex - 1) / 2);
    }
  }
  dequeue() {
    if (!this.values.length) {
      return null;
    } else if (this.values.length === 1) {
      return this.values.pop();
    } else {
      let temp = this.values.pop();
      this.values.push(this.values[0]);
      this.values[0] = temp;
      let remove = this.values.pop();
      this.maxHeapify(0);
      return remove;
    }
  }
  maxHeapify(i) {
    let largest = i;
    let left = largest * 2 + 1;
    let right = largest * 2 + 2;

    if (
      left <= this.values.length - 1 &&
      this.values[left].priority > this.values[largest].priority
    ) {
      largest = left;
    }
    if (
      right <= this.values.length - 1 &&
      this.values[right].priority > this.values[largest].priority
    ) {
      largest = right;
    }
    if (largest !== i) {
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat Breakfast", 45);
pq.enqueue("Learn Java", 35);
pq.enqueue("Learn Python", 25);
pq.enqueue("Buy Textbooks", 8);
pq.enqueue("Watch Netflix", 12);
pq.enqueue("Pay Bills", 15);

while (pq.values.length >= 1) {
  let task = pq.dequeue();
  console.log(task.value + ", " + task.priority);
}
