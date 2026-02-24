import test from "node:test";
import assert from "node:assert/strict";

import {
  createInitialState,
  setDirection,
  tick,
  placeFood
} from "../snakeLogic.js";

test("moves one cell each tick in current direction", () => {
  const start = {
    width: 5,
    height: 5,
    snake: [
      { x: 2, y: 2 },
      { x: 1, y: 2 },
      { x: 0, y: 2 }
    ],
    direction: "RIGHT",
    food: { x: 4, y: 4 },
    score: 0,
    isGameOver: false,
    isPaused: false
  };

  const next = tick(start, () => 0);
  assert.deepEqual(next.snake, [
    { x: 3, y: 2 },
    { x: 2, y: 2 },
    { x: 1, y: 2 }
  ]);
});

test("blocks reverse-direction turns", () => {
  const state = createInitialState({ width: 10, height: 10, rng: () => 0 });
  const next = setDirection(state, "LEFT");
  assert.equal(next.direction, "RIGHT");
});

test("grows and increments score when food is eaten", () => {
  const start = {
    width: 5,
    height: 5,
    snake: [
      { x: 2, y: 2 },
      { x: 1, y: 2 },
      { x: 0, y: 2 }
    ],
    direction: "RIGHT",
    food: { x: 3, y: 2 },
    score: 0,
    isGameOver: false,
    isPaused: false
  };

  const next = tick(start, () => 0);
  assert.equal(next.score, 1);
  assert.equal(next.snake.length, 4);
  assert.notDeepEqual(next.food, { x: 3, y: 2 });
});

test("sets game over on wall collision", () => {
  const start = {
    width: 3,
    height: 3,
    snake: [
      { x: 2, y: 1 },
      { x: 1, y: 1 },
      { x: 0, y: 1 }
    ],
    direction: "RIGHT",
    food: { x: 0, y: 0 },
    score: 0,
    isGameOver: false,
    isPaused: false
  };

  const next = tick(start, () => 0);
  assert.equal(next.isGameOver, true);
});

test("sets game over on self collision", () => {
  const start = {
    width: 6,
    height: 6,
    snake: [
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 1 }
    ],
    direction: "DOWN",
    food: { x: 5, y: 5 },
    score: 0,
    isGameOver: false,
    isPaused: false
  };

  const next = tick(start, () => 0);
  assert.equal(next.isGameOver, true);
});

test("food placement avoids snake body", () => {
  const state = {
    width: 3,
    height: 3,
    snake: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 }
    ],
    food: { x: 0, y: 1 }
  };

  const food = placeFood(state, () => 0);
  assert.deepEqual(food, { x: 0, y: 1 });
});
