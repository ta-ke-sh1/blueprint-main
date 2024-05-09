import { getNeighbors, getAllNodes } from "./util";

export default function AStar(grid, startNode, endNode) {
  const visitedNode = [];
  startNode.f = 0;
  startNode.s = 0;
  const nodeList = getAllNodes(grid);

  while (!!nodeList) {
    sortNodesByFValue(nodeList);
    const currentNode = nodeList.shift();

    if (currentNode.f === Infinity) return visitedNode;
    if (currentNode.isWall) continue;

    currentNode.isVisited = true;
    visitedNode.push(currentNode);

    if (currentNode === endNode) return visitedNode;

    let neighbors = getNeighbors(currentNode, grid);
    for (const neighbor of neighbors) {
      let path = currentNode.s + (currentNode.weight ?? 1);
      if (path < neighbor.s) {
        neighbor.s = path;
        neighbor.previousNode = currentNode;
        neighbor.f = path + Heuristic(neighbor, endNode);
      }
    }
  }
}

function sortNodesByFValue(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => {
    return nodeA.f - nodeB.f;
  });
}

function Heuristic(node1, node2) {
  let d1 = Math.abs(node1.row - node2.row);
  let d2 = Math.abs(node1.col - node2.col);
  return d1 + d2;
}
