import { getNeighbors, getNodesFromGrid } from "./util";

export default function Djikstra(grid, startNode, endNode) {
  const visitedNode = [];
  startNode.f = 0;
  startNode.s = 0;
  const nodeList = getNodesFromGrid(grid);
  while (!!nodeList) {
    sortNodesByDistance(nodeList);
    const currentNode = nodeList.shift();

    if (currentNode.f === Infinity) return visitedNode;
    if (currentNode.isWall) continue;

    currentNode.isVisited = true;
    visitedNode.push(currentNode);

    if (currentNode === endNode) return visitedNode;

    let neighbors = getNeighbors(currentNode, grid);
    for (const neighbor of neighbors) {
      neighbor.distance = closestNode.distance + 1;
      neighbor.previousNode = currentNode;
    }
  }
}

function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => {
    return nodeA.distance - nodeB.distance;
  });
}
