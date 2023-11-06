// In Computer Science, a priority queue is an abstract data type which is like a regular queue or stack data structure,
// but where additionally each element has a "priority" associated with it.
// Elements with higher priority are served before elements with lower priority.

// We can implement it with a linked list, queue, array, or other data structure.
// But... Max Heap is the most efficient
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
    // check if the priority queue is empty
    if (this.values.length === 0) {
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
    ) {
      // swap parent and child
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;
      // update index number
      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      let removedNode = this.values.pop();
      return removedNode;
    }

    // swap two nodes
    let temp = this.values.pop();
    this.values.push(this.values[0]);
    this.values[0] = temp;
    let removedNode = this.values.pop();

    this.maxHeapify(0);

    return removedNode;
  }

  maxHeapify(i) {
    let largest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    if (
      l <= this.values.length - 1 &&
      this.values[l].priority > this.values[i].priority
    ) {
      largest = l;
    } else {
      largest = i;
    }

    if (
      r <= this.values.length - 1 &&
      this.values[r].priority > this.values[largest].priority
    ) {
      largest = r;
    }

    if (largest != i) {
      // swap
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapify(largest);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat Breakfast", 5);
pq.enqueue("Learn Java", 5);
pq.enqueue("Learn Python", 5);
pq.enqueue("Buy Textbooks", 8);
pq.enqueue("Watch Netflix", 12);
pq.enqueue("Pay Bills", 15);

while (pq.values.length >= 1) {
  let task = pq.dequeue();
  console.log(task.value + ", " + task.priority);
}
