// Source: https://github.com/angeluriot/Maze_solver/blob/master/js/maze_generators.js

function place_to_cell(row, col) {
  return document.getElementById(`spCell-${col}-${row}`);
}

function add_wall(row, col) {
  let cell = document.getElementById(`spCell-${col}-${row}`);
  if (cell) {
    cell.classList.toggle("isWall");
  }
}

export function clearGrid() {}

export function removeWall() {}

export function get_neighbours(cell, distance) {
  let up = [cell[0], cell[1] - distance];
  let right = [cell[0] + distance, cell[1]];
  let down = [cell[0], cell[1] + distance];
  let left = [cell[0] - distance, cell[1]];
  return [up, right, down, left];
}

export function random_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function fill() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      add_wall(i, j);
    }
  }
}

export function fill_walls() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i % 2 == 0 || j % 2 == 0) add_wall(i, j);
    }
  }
}

export function enclose() {
  for (let i = 0; i < grid.length; i++) {
    add_wall(i, 0);
    add_wall(i, grid[0].length - 1);
  }

  for (let j = 0; j < grid[0].length; j++) {
    add_wall(0, j);
    add_wall(grid.length - 1, j);
  }
}

export function kruskal_algorithm() {
  fill_walls();
  let nb_areas = 0;
  let wall_list = [];

  for (let i = 1; i < grid.length - 1; i++)
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (i % 2 == 1 && j % 2 == 1) {
        nb_areas++;
        grid[i][j] = nb_areas;
        place_to_cell(i, j).classList.add("visited_cell");
      }

      if ((i + j) % 2 == 1) wall_list.push([i, j]);
    }

  my_interval = window.setInterval(function () {
    while (true) {
      if (nb_areas == 1) {
        clearInterval(my_interval);
        clear_grid();
        generating = false;
        return;
      }

      let index = random_int(0, wall_list.length);
      let wall = wall_list[index];
      wall_list.splice(index, 1);
      let cell_pair;

      if (grid[wall[0] - 1][wall[1]] > -1) cell_pair = [grid[wall[0] - 1][wall[1]], grid[wall[0] + 1][wall[1]]];
      else cell_pair = [grid[wall[0]][wall[1] - 1], grid[wall[0]][wall[1] + 1]];

      if (cell_pair[0] != cell_pair[1]) {
        for (let i = 1; i < grid.length - 1; i += 2) for (let j = 1; j < grid[0].length - 1; j += 2) if (grid[i][j] == cell_pair[0]) grid[i][j] = cell_pair[1];

        remove_wall(wall[0], wall[1]);
        place_to_cell(wall[0], wall[1]).classList.add("visited_cell");
        nb_areas--;
        return;
      }
    }
  }, 29);
}
