# Classic Snake Game (JavaScript, Deterministic Logic)

This repository contains a minimal, fully functional implementation of the classic Snake game built using only HTML, CSS, and JavaScript. The project focuses on deterministic game logic, testability, and clean separation between game engine and rendering.

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

| File / Folder | Type | Description |
|--------------|------|-------------|
| `index.html` | File | Entry point of the application. Contains the main HTML structure and root container where the game is rendered. |
| `styles.css` | File | Defines the visual appearance of the game including grid layout, snake styling, food styling, buttons, and overall UI layout. |
| `snake.js` | File | Handles the game loop, rendering logic, keyboard input handling, on-screen controls, pause/resume functionality, and UI updates. Connects the core logic with the visual layer. |
| `snakeLogic.js` | File | Contains the deterministic core game engine. Responsible for snake movement, direction changes, collision detection, food spawning, growth logic, score updates, and state transitions. Fully testable and independent of rendering. |
| `server.mjs` | File | Lightweight Node.js development server used to serve the project locally. Allows running the game in a browser during development. |
| `package.json` | File | Contains project metadata and defines scripts such as `npm run dev` to start the server and `npm test` to run unit tests. |
| `tests/` | Folder | Contains unit tests that verify correctness of the game logic. |
| `tests/snakeLogic.test.js` | File | Unit tests for core game engine. Tests movement, growth, collision detection, and food placement logic. |
| `.gitignore` | File | Specifies files and folders ignored by Git such as node_modules, system files, and environment files. |
| `README.md` | File | Documentation explaining project purpose, setup instructions, architecture, controls, and usage. |

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
```
If not installed, download from:

https://nodejs.org

Step 2 — Clone Repository
```bash
git clone https://github.com/parmeetk2005/snake-game.git
```
Enter project folder:
```bash
cd snake-game
```
Step 3 — Start Development Server
```bash
npm run dev
```
Open browser:
```bash
http://localhost:5173
```
Game will run.

---

# How to Run Tests

Run:
```bash
npm test
```

This executes tests in:
```bash
tests/snakeLogic.test.js
```

Tests verify:

-Movement correctness  
-Direction validation  
-Growth logic  
-Wall collision detection  
-Self collision detection  
-Food placement correctness  

Expected result:
```bash
All tests passing
```

# Keyboard Controls
```bash
Arrow Up       Move Up
Arrow Down     Move Down
Arrow Left     Move Left
Arrow Right    Move Right

W              Move Up
S              Move Down
A              Move Left
D              Move Right

Space          Pause / Resume
```

# On-Screen Controls

Available for both mobile and mouse users:

- Up Button → Moves snake upward  
- Down Button → Moves snake downward  
- Left Button → Moves snake left  
- Right Button → Moves snake right  
- Pause Button → Pauses or resumes the game  
- Restart Button → Restarts the game from initial state  

---

# Game Rules

## Continuous Movement
- The snake moves continuously across the grid once the game starts.
- Player input only changes direction, not movement speed.

## Eating Food
When the snake eats food:

- Score increases by 1
- Snake length increases by one segment

## Game Over Conditions
The game ends immediately when:

- Snake collides with the wall
- Snake collides with itself

## Restart Behavior
When restarting the game:

- Snake position resets to initial state
- Score resets to 0
- Game state resets to running mode

---

# Design Principles Used

This project follows core software engineering principles to ensure reliability and maintainability.

## Deterministic Logic
- Same input always produces the same output
- Ensures predictable and testable behavior

## Separation of Concerns
- Game logic is independent from rendering layer
- Improves maintainability
- Makes logic reusable and testable

## Minimal Dependency Architecture
- No external libraries used
- Reduces complexity
- Improves portability
- Easier to maintain long-term

## Testable Design
- Core game engine is isolated
- Logic can be unit tested independently
- Ensures correctness and reliability

---
