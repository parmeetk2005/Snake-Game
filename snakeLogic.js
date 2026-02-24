export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 }
};

export function createInitialState(config = {}) {
  const width = config.width ?? 20;
  const height = config.height ?? 20;
  const initialSnake = config.initialSnake ?? [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ];

  const state = {
    width,
    height,
    snake: initialSnake,
    direction: config.initialDirection ?? "RIGHT",
    score: 0,
    food: { x: 0, y: 0 },
    isGameOver: false,
    isPaused: false
  };

  return {
    ...state,
    food: placeFood(state, config.rng)
  };
}

export function setDirection(state, nextDirection) {
  if (!DIRECTIONS[nextDirection] || state.isGameOver) {
    return state;
  }

  if (isOppositeDirection(state.direction, nextDirection)) {
    return state;
  }

  return {
    ...state,
    direction: nextDirection
  };
}

export function togglePause(state) {
  if (state.isGameOver) {
    return state;
  }

  return {
    ...state,
    isPaused: !state.isPaused
  };
}

export function tick(state, rng = Math.random) {
  if (state.isGameOver || state.isPaused) {
    return state;
  }

  const delta = DIRECTIONS[state.direction];
  const nextHead = {
    x: state.snake[0].x + delta.x,
    y: state.snake[0].y + delta.y
  };

  const ateFood = nextHead.x === state.food.x && nextHead.y === state.food.y;
  const grownSnake = [nextHead, ...state.snake];
  const nextSnake = ateFood ? grownSnake : grownSnake.slice(0, -1);

  if (hitBoundary(nextHead, state.width, state.height) || hitSelf(nextHead, nextSnake.slice(1))) {
    return {
      ...state,
      snake: nextSnake,
      isGameOver: true
    };
  }

  const baseState = {
    ...state,
    snake: nextSnake,
    score: ateFood ? state.score + 1 : state.score
  };

  if (!ateFood) {
    return baseState;
  }

  return {
    ...baseState,
    food: placeFood(baseState, rng)
  };
}

export function placeFood(state, rng = Math.random) {
  const occupied = new Set(state.snake.map((segment) => `${segment.x},${segment.y}`));
  const freeCells = [];

  for (let y = 0; y < state.height; y += 1) {
    for (let x = 0; x < state.width; x += 1) {
      const key = `${x},${y}`;
      if (!occupied.has(key)) {
        freeCells.push({ x, y });
      }
    }
  }

  if (freeCells.length === 0) {
    return state.food;
  }

  const index = Math.floor(rng() * freeCells.length);
  return freeCells[index];
}

function hitBoundary(head, width, height) {
  return head.x < 0 || head.x >= width || head.y < 0 || head.y >= height;
}

function hitSelf(head, body) {
  return body.some((segment) => segment.x === head.x && segment.y === head.y);
}

function isOppositeDirection(current, nextDirection) {
  return (
    (current === "UP" && nextDirection === "DOWN") ||
    (current === "DOWN" && nextDirection === "UP") ||
    (current === "LEFT" && nextDirection === "RIGHT") ||
    (current === "RIGHT" && nextDirection === "LEFT")
  );
}
