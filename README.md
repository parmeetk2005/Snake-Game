# Classic Snake Game (Vanilla JavaScript, Deterministic Logic)

This repository contains a minimal, fully functional implementation of the classic Snake game built using only vanilla HTML, CSS, and JavaScript. The project focuses on deterministic game logic, testability, and clean separation between game engine and rendering.

No external libraries or frameworks are used.

---

# Live Overview

This is a browser-based Snake game featuring:

- Grid-based snake movement
- Food spawning
- Snake growth
- Score tracking
- Collision detection
- Game over handling
- Restart functionality
- Pause and resume support
- Keyboard and on-screen controls
- Deterministic core game engine
- Unit tested logic

---

# Objectives of This Project

The main purpose of this project is to demonstrate:

- Clean game loop implementation
- Deterministic state management
- Separation of concerns (logic vs rendering)
- Testable architecture
- Minimal dependency footprint
- Browser-based interactive application

This is designed to be simple, predictable, and maintainable.

---

# Project Structure



---

# How the Game Works (Architecture)

The project separates game into two layers:

## Layer 1 — Game Logic (snakeLogic.js)

Responsible for:

- Snake position tracking
- Direction updates
- Collision detection
- Food placement
- Score updates
- Game state transitions

This layer is:

- Deterministic
- Independent of UI
- Fully testable

This makes it reusable and reliable.

---

## Layer 2 — Rendering and Input (snake.js)

Responsible for:

- Rendering snake and food
- Capturing keyboard input
- Handling on-screen controls
- Running game loop timer
- Updating UI

This layer does not contain game logic.

It only visualizes state.

---

# How to Run the Project

## Step 1 — Install Node.js

Check installation:

```bash
node -v

(If not installed, download from:

https://nodejs.org)
