export function ShortestPath(grid, start, end) {
  const shortestPath = [];
  start.distance = 0;

  const nodeList = getAllNodes(grid);

  try {
    while (!!nodeList) {
      sortNodesByDistance(nodeList);
      const currentNode = nodeList.shift();

      if (currentNode.isWall) continue;
      if (currentNode.distance === Infinity) {
        console.log("return");
        return shortestPath;
      }
      currentNode.isVisited = true;
      shortestPath.push(currentNode);

      if (currentNode.row === end.row && currentNode.col === end.col) {
        console.log("found");
        return shortestPath;
      }

      let neighbors = getNeighbor(currentNode, grid);
      for (const neighbor of neighbors) {
        neighbor.distance = currentNode.distance + currentNode.weight;
        neighbor.previousNode = currentNode;
      }
    }
  } catch (e) {
    console.log(e.toString());
  }

  return shortestPath;
}

export function getAllNodes(grid) {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

function getNeighbor(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 1) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 1) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

export function sortNodesByDistance(unvisitedNodes) {
  unvisitedNodes.sort((nodeA, nodeB) => {
    return nodeA.distance - nodeB.distance;
  });
}

export function getNodesShortestPath(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);

    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
