class Node {
  constructor(value) {
    this.value = value;
    this.visited = false;
    this.edges = [];
  }
  addNeighbor(edge) {
    this.edges.push(edge);
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

let tempEdge = [];

function mstPrim(startNode) {
  let mstEdges = [];
  for (let i = 0; i <= startNode.edges.length - 1; i++) {
    tempEdge.push(startNode.edges[i]);
  }

  let currentVisitedNodeBestEdge = findMinEdge();

  while (currentVisitedNodeBestEdge !== null) {
    let n1 = currentVisitedNodeBestEdge.node1;
    let n2 = currentVisitedNodeBestEdge.node2;
    n1.visited = true;
    n2.visited = true;
    mstEdges.push(currentVisitedNodeBestEdge);
    tempEdge = [];
    //find which node is visited
    allNodes.forEach((node) => {
      if (node.visited) {
        // For each edge edge, it checks whether the edge is not included in the mstEdges array,
        // indicating that it has not been added to the minimum spanning tree (MST).
        // If the edge is not already included in the MST (i.e., it's not in mstEdges),
        // it adds the edge to the bucket array.
        node.edges.forEach((edge) => {
          if (!mstEdges.includes(edge)) {
            tempEdge.push(edge);
          }
        });
      }
    });
    currentVisitedNodeBestEdge = findMinEdge();
  }

  return mstEdges;
}

function findMinEdge() {
  let minEdge = null;
  while (minEdge === null && tempEdge.length !== 0) {
    minEdge = tempEdge[0];
    let index = 0;
    tempEdge.forEach((edge, i) => {
      if (edge.weight < minEdge.weight) {
        minEdge = edge;
        index = i;
      }
    });
    if (minEdge.node1.visited && minEdge.node2.visited) {
      tempEdge.splice(index, 1);
      minEdge = null;
    }
  }

  return minEdge;
}

console.log(mstPrim(A));
