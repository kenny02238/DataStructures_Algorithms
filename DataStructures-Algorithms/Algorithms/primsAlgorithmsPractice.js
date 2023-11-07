class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.edge = [];
  }
  addNeighbor(edge) {
    this.edge.push(edge);
  }
}

let A = new Node("A");
let B = new Node("B");
let C = new Node("C");
let D = new Node("D");
let E = new Node("E");
let F = new Node("F");
let allNodes = [A, B, C, D, E, F];

class Edge {
  constructor(node1, node2, weight) {
    this.node1 = node1;
    this.node2 = node2;
    this.weight = weight;
  }
}

let e1 = new Edge(A, B, 10);
A.addNeighbor(e1);
B.addNeighbor(e1);
let e2 = new Edge(A, C, 8);
A.addNeighbor(e2);
C.addNeighbor(e2);
let e3 = new Edge(B, D, 6);
B.addNeighbor(e3);
D.addNeighbor(e3);
let e4 = new Edge(C, D, 5);
C.addNeighbor(e4);
D.addNeighbor(e4);
let e5 = new Edge(B, E, 7);
B.addNeighbor(e5);
E.addNeighbor(e5);
let e6 = new Edge(D, E, 4);
D.addNeighbor(e6);
E.addNeighbor(e6);
let e7 = new Edge(D, F, 3);
D.addNeighbor(e7);
F.addNeighbor(e7);
let e8 = new Edge(E, F, 1);
E.addNeighbor(e8);
F.addNeighbor(e8);
let e9 = new Edge(C, F, 8);
C.addNeighbor(e9);
F.addNeighbor(e9);
