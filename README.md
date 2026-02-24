# Classic Snake Game

A minimal and fully functional implementation of the classic Snake game built using HTML, CSS, and JavaScript. This project focuses on deterministic game logic, clean architecture, and testability. No external libraries or frameworks are used.

---

# Overview

This is a browser-based Snake game demonstrating core game development principles using simple and maintainable code.

Features included:

- Grid-based snake movement
- Food spawning system
- Snake growth mechanism
- Score tracking
- Collision detection (wall and self)
- Game over handling
- Restart functionality
- Pause and resume support
- Keyboard controls
- On-screen controls for mobile and mouse users
- Deterministic and testable core logic
- Unit tested game engine

---

# Technology Stack

This project uses:

- HTML5
- CSS3
- JavaScript
- Node.js (for development server and testing)

No external dependencies are used.

---

# Project Structure

| File / Folder | Type | Description |
|--------------|------|-------------|
| index.html | File | Entry point of the application. Contains main HTML structure and game container. |
| styles.css | File | Defines layout, grid styling, snake appearance, food appearance, and UI controls. |
| snake.js | File | Handles rendering, input handling, game loop, and UI updates. |
| snakeLogic.js | File | Core deterministic game engine. Handles movement, collision detection, food spawning, and game state. |
| server.mjs | File | Lightweight Node.js development server used to run the project locally. |
| package.json | File | Contains project scripts and metadata. |
| tests/ | Folder | Contains unit tests for core game logic. |
| tests/snakeLogic.test.js | File | Unit tests verifying movement, growth, collisions, and food placement. |
| .gitignore | File | Specifies files ignored by Git. |
| README.md | File | Project documentation. |

---

# Installation and Setup

### Step 1: Install Node.js

Check if Node.js is installed:

```bash
node -v
```

If not installed, download from:
https://nodejs.org

---

### Step 2: Clone Repository

```bash
git clone https://github.com/parmeetk2005/snake-game.git
```

Enter project folder:

```bash
cd snake-game
```
---

# Running the Project

Start development server:

```bash
npm run dev
```

Open browser and go to:

```bash
http://localhost:5173
```

---

# Running Tests

Run unit tests:

```bash
npm test
```

Tests verify:

- Movement logic correctness
- Direction handling validation
- Snake growth behavior
- Wall collision detection
- Self collision detection
- Food placement correctness

---

# Controls

### Keyboard Controls

Arrow Up → Move Up  
Arrow Down → Move Down  
Arrow Left → Move Left  
Arrow Right → Move Right  

Alternative keys:

W → Move Up  
S → Move Down  
A → Move Left  
D → Move Right  

Space → Pause or Resume game  

---

# On-Screen Controls

Available for mobile and mouse users:

- Up Button → Move snake upward
- Down Button → Move snake downward
- Left Button → Move snake left
- Right Button → Move snake right
- Pause Button → Pause or resume game
- Restart Button → Restart game

---

# Game Rules

### Movement

- Snake moves continuously across the grid
- Player controls only the direction

### Eating Food

When snake eats food:

- Score increases by 1
- Snake length increases

### Game Over Conditions

Game ends when:

- Snake hits the wall
- Snake hits itself

### Restart Behavior

Restart resets:

- Snake position
- Score
- Game state

---

# Architecture

This project uses a layered architecture.

### Game Logic Layer (snakeLogic.js)

Responsible for:

- Snake position updates
- Movement logic
- Collision detection
- Food spawning
- Growth handling
- Score tracking

Properties:

- Deterministic
- Testable
- Independent of rendering

---

### Rendering Layer (snake.js)

Responsible for:

- Rendering snake and food
- Handling keyboard input
- Handling on-screen controls
- Running game loop
- Updating UI

Rendering layer does not contain game logic.

---

# Design Principles Used

### Deterministic Logic

- Same input always produces same output
- Ensures predictable and reliable behavior

---

### Separation of Concerns

- Game logic is separate from rendering
- Improves maintainability
- Improves testability
- Improves code clarity

---

### Minimal Dependency Architecture

- No external libraries used

Benefits:

- Reduced complexity
- Easier maintenance
- Better portability

---

### Testable Design

- Core logic is independently testable
- Ensures correctness and reliability

---

# Example Game Flow

Typical game lifecycle:

1. Game starts
2. Snake moves automatically
3. Player controls snake direction
4. Snake eats food
5. Snake grows in length
6. Player avoids collisions
7. Collision occurs
8. Game ends
9. Player restarts game

---

# Why This Project is Valuable

This project demonstrates:

- Game loop implementation
- State management
- Deterministic system design
- Input handling
- Rendering logic
- Collision detection
- Testable architecture
- Separation of concerns

This is a clean implementation of an interactive browser-based game.

---

# Future Improvements

Possible enhancements:

- High score persistence using localStorage
- Increasing difficulty over time
- Sound effects
- Visual animations
- Touch gesture support
- Mobile optimization
- Difficulty levels
- Game settings panel

---

# License

Free to use and modify.
