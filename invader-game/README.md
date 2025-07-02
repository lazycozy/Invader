# Invader Game

Invader Game is a simple implementation of the classic space invaders game. The player controls a spaceship that can move left and right and shoot bullets to destroy incoming invaders.

## Project Structure

```
invader-game
├── src
│   ├── main.ts          # Entry point of the application, initializes the game and starts the game loop.
│   ├── game
│   │   ├── Invader.ts   # Defines the Invader class with methods for movement and rendering.
│   │   ├── Player.ts    # Defines the Player class with methods for movement, shooting, and rendering.
│   │   ├── Bullet.ts    # Defines the Bullet class with methods for movement and rendering.
│   │   └── GameEngine.ts # Defines the GameEngine class to manage game state and rendering.
│   └── assets
│       └── sounds       # Directory containing sound files used in the game.
├── package.json         # npm configuration file listing dependencies and scripts.
├── tsconfig.json        # TypeScript configuration file specifying compiler options.
└── README.md            # Documentation for the project, including game description and instructions.
```

## How to Run

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd invader-game
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the game:
   ```
   npm start
   ```

## Controls

- Move left: Arrow Left
- Move right: Arrow Right
- Shoot: Spacebar

Enjoy playing the Invader Game!