// Get the canvas and its 2D rendering context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define our player object
const player = {
    x: canvas.width / 2, // Start in the middle
    y: canvas.height / 2,
    size: 20,
    speed: 5,
    dx: 0, // direction x
    dy: 0  // direction y
};

// --- Game Logic Functions ---

// Function to update the position and draw the game
function update() {
    // Clear the canvas to prepare for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update player position based on its direction
    player.x += player.dx;
    player.y += player.dy;

    // Draw the player (a simple red square for now)
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // Call the game loop again for the next frame
    requestAnimationFrame(update);
}

// --- Event Listeners for Input ---

// Listen for a key being pressed down
document.addEventListener('keydown', (e) => {
    // Set the player's direction based on the key
    if (e.key === 'ArrowRight' || e.key === 'd') {
        player.dx = player.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        player.dx = -player.speed;
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        player.dy = -player.speed;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        player.dy = player.speed;
    }
});

// Listen for a key being released
document.addEventListener('keyup', (e) => {
    // Stop the player's movement when the key is released
    if (
        e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'd' || e.key === 'a'
    ) {
        player.dx = 0;
    }
    if (
        e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'w' || e.key === 's'
    ) {
        player.dy = 0;
    }
});

// --- Start the Game ---

// This function will kick off our game loop
requestAnimationFrame(update);