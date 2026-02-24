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
(If not installed, download from:
https://nodejs.org

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

How to Run Tests

Run:
```bash
npm test
```

This executes tests in:
```bash
tests/snakeLogic.test.js
```
Tests verify:

Movement correctness

Direction validation

Growth logic

Wall collision detection

Self collision detection

Food placement correctness

Expected result:

All tests passing
Controls
Keyboard Controls
Arrow Up       Move Up
Arrow Down     Move Down
Arrow Left     Move Left
Arrow Right    Move Right

W              Move Up
S              Move Down
A              Move Left
D              Move Right

Space          Pause / Resume
On-Screen Controls

Available for mobile and mouse users:

Up button

Down button

Left button

Right button

Pause button

Restart button

Game Rules

The snake moves continuously across the grid.

Eating food:

Increases score by 1

Increases snake length

Game ends when:

Snake hits wall

Snake hits itself

Restart resets:

Snake position

Score

Game state

Design Principles Used

This project follows these engineering principles:

Deterministic logic

Same input → same output.

Ensures reliability.

Separation of concerns

Game logic is independent from rendering.

Improves maintainability and testability.

Minimal dependency architecture

No external libraries.

Reduces complexity and improves portability.

Testable design

Core engine can be unit tested independently.

Ensures correctness.

Scripts Available

Run development server:

npm run dev

Run tests:

npm test
Example Game Flow

Game starts

Snake moves automatically

Player controls direction

Snake eats food → grows

Player avoids collision

Game ends on collision

Player restarts

Why This Project is Valuable

This project demonstrates understanding of:

Game loop architecture

State management

Deterministic systems

Input handling

Rendering pipeline

Collision detection

Test-driven logic

This is a fundamental example of interactive software engineering.

Future Improvements (Optional)

Possible extensions:

High score persistence (localStorage)

Increasing speed difficulty

Sound effects

Animations

Touch gesture controls

Mobile optimization

Game settings menu

