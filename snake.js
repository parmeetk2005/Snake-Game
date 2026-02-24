import {
  createInitialState,
  setDirection,
  tick,
  togglePause
} from "./snakeLogic.js";

const board = document.getElementById("board");
const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");
const pauseBtn = document.getElementById("pauseBtn");

const ctx = board.getContext("2d");
const size = 20;
const cellSize = board.width / size;

let state = createInitialState({ width: size, height: size });

function updateDirection(dir) {
  state = setDirection(state, dir);
}

function restart() {
  state = createInitialState({ width: size, height: size });
  pauseBtn.textContent = "Pause";
}

function drawGrid() {
  ctx.clearRect(0, 0, board.width, board.height);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, board.width, board.height);

  ctx.strokeStyle = "#e3e3e3";
  ctx.lineWidth = 1;
  for (let i = 0; i <= size; i += 1) {
    const p = i * cellSize;

    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, board.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, p);
    ctx.lineTo(board.width, p);
    ctx.stroke();
  }
}

function drawState() {
  drawGrid();

  ctx.fillStyle = "#d32f2f";
  ctx.fillRect(state.food.x * cellSize, state.food.y * cellSize, cellSize, cellSize);

  ctx.fillStyle = "#2f7d32";
  for (const part of state.snake) {
    ctx.fillRect(part.x * cellSize, part.y * cellSize, cellSize, cellSize);
  }

  scoreEl.textContent = String(state.score);

  if (state.isGameOver) {
    statusEl.textContent = "Game Over";
  } else if (state.isPaused) {
    statusEl.textContent = "Paused";
  } else {
    statusEl.textContent = "Running";
  }
}

function loop() {
  state = tick(state);
  drawState();
}

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d", " "].includes(key)) {
    event.preventDefault();
  }

  if (key === "arrowup" || key === "w") updateDirection("UP");
  if (key === "arrowdown" || key === "s") updateDirection("DOWN");
  if (key === "arrowleft" || key === "a") updateDirection("LEFT");
  if (key === "arrowright" || key === "d") updateDirection("RIGHT");
  if (key === " ") {
    state = togglePause(state);
    pauseBtn.textContent = state.isPaused ? "Resume" : "Pause";
    drawState();
  }
});

restartBtn.addEventListener("click", () => {
  restart();
  drawState();
});

pauseBtn.addEventListener("click", () => {
  state = togglePause(state);
  pauseBtn.textContent = state.isPaused ? "Resume" : "Pause";
  drawState();
});

document.querySelectorAll("[data-dir]").forEach((button) => {
  button.addEventListener("click", () => {
    const dir = button.getAttribute("data-dir");
    updateDirection(dir);
  });
});

drawState();
setInterval(loop, 140);
