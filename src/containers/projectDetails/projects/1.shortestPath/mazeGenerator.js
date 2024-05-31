export const ALGORITHMS = {
  DFS: "DFS",
  Kruskal: "Kruskal",
};

export default class MazeGenerator {
  grid;
  algorithm;

  constructor(grid, algorithm) {
    this.grid = grid;
    this.algorithm = algorithm;
    console.log("Row:", grid.length, "Col:", grid[0].length);
  }

  generateMaze(start, end) {
    let temp = [[]];
    switch (this.algorithm) {
      case ALGORITHMS.DFS:
        console.log("DFS");
        temp = this.DFS(this.grid[0].length - 1, this.grid.length - 1, start, end);
        break;
      case ALGORITHMS.Kruskal:
        console.log("Kruskal");
        temp = this.Kruskal(this.grid[0].length - 1, this.grid.length - 1, start, end);
        break;
      default:
        console.log("Invalid");
        break;
    }

    this.enclose();
    this.getMaze(temp);
    return this.grid;
  }

  add_wall(row, col) {
    this.grid[row][col].isWall = true;
  }

  enclose() {
    for (let i = 0; i < this.grid.length; i++) {
      this.add_wall(i, 0);
      this.add_wall(i, this.grid[0].length - 1);
    }

    for (let j = 0; j < this.grid[0].length; j++) {
      this.add_wall(0, j);
      this.add_wall(this.grid.length - 1, j);
    }
  }

  getMaze(grid) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (this.grid[i][j].isStart || this.grid[i][j].isEnd) {
          continue;
        }

        switch (this.algorithm) {
          case ALGORITHMS.DFS:
            this.grid[i][j].isWall = grid[i][j] === true || grid[i][j] === "0";
            break;
          case ALGORITHMS.Kruskal:
            this.grid[i][j].isWall = grid[i][j] === true || grid[i][j] !== 0;
            break;
          default:
            console.log("Invalid");
            break;
        }
      }
    }
  }

  DFS(width, height, start, end) {
    // Make dimensions odd
    width -= width % 2;
    width++;
    height -= height % 2;
    height++;

    // Initialize maze
    var maze = [];
    for (var i = 0; i < height; i++) {
      maze.push([]);
      for (var j = 0; j < width; j++) {
        maze[i].push(!(i % 2 === 1 && j % 2 === 1));
      }
    }

    for (var k = 1; k < width; k += 2) {
      for (var m = 1; m < height; m += 2) {
        var south = Math.floor(Math.random() * 2);

        if (m === height - 2) south = 0;
        if (k === width - 2) south = 1;
        if (k === width - 2 && m === height - 2) break;

        if (south) maze[m + 1][k] = 0;
        else maze[m][k + 1] = 0;
      }
    }

    maze[start.row][start.col] = 0;
    maze[end.row][end.col] = 0;

    return maze;
  }

  Kruskal(width, height, start, end) {
    // Make dimensions odd
    width -= width % 2;
    width++;
    height -= height % 2;
    height++;

    function contains(s, c) {
      for (let i = 0; i < s.length; i++) {
        if (s[i][0] === c[0] && s[i][1] === c[1]) return true;
      }
      return false;
    }

    function indexOfSet(sets, c) {
      for (let i = 0; i < sets.length; i++) {
        if (contains(sets[i], c)) return i;
      }
      return -1;
    }

    // Initialize maze: each square is its own set
    var maze = [];
    var sets = [];
    var edges = [];

    for (let i = 0; i < height; i++) {
      maze.push([]);
      for (let j = 0; j < width; j++) {
        let add = !(i % 2 === 1 && j % 2 === 1);
        maze[i].push(add + 0);
        if (!add) sets.push([[i, j]]);

        if (i !== height - 2 && !add) edges.push([i + 1, j]);

        if (j !== width - 2 && !add) edges.push([i, j + 1]);
      }
    }

    maze[start.row][start.col] = 0;

    while (edges.length) {
      let index = Math.floor(Math.random() * edges.length);
      let removed = edges.splice(index, 1)[0];

      let iorj = removed[0] % 2;

      let cell1, cell2;

      if (iorj) {
        cell1 = [removed[0], removed[1] - 1];
        cell2 = [removed[0], removed[1] + 1];
      } else {
        cell1 = [removed[0] - 1, removed[1]];
        cell2 = [removed[0] + 1, removed[1]];
      }

      let i1 = indexOfSet(sets, cell1);
      let i2 = indexOfSet(sets, cell2);

      if (i1 !== i2) {
        let add = sets.splice(i2, 1)[0];
        if (i2 < i1) i1--;
        sets[i1] = sets[i1].concat(add);
        maze[removed[0]][removed[1]] = 0;
      }
    }

    maze[end.row][end.col] = 0;
    return maze;
  }
}
