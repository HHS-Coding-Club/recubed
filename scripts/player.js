/*
    Player

    These are just functions and variables that are used to control the player.
*/

var player = {
    xPos: 0, // X position
    yPos: 0, // Y position
    width: 32, // Width
    height: 32, // Height
    
    xVelocity: 0, // X Velocity
    yVelocity: 0, // Y Velocity

    isJumping: false, // If the player is jumping.
    isGrounded: false, // If the player is grounded.
    
    speed: 4, // Current speed. Regular 4, Fast, 8, Slow, 1
    friction: 0.92, // Friction
    gravity: 0.215, // Gravity
    jumpHeight: 3.3, // Jump Height

    direction: 'r', // Direction the player is facing.
    score: 0 // Score
}

/*
    drawPlayer
    Draws the player to the screen based on the player's position,
*/
function drawPlayer()
{
    ctx.fillStyle = 'white';
    ctx.fillRect(player.xPos, player.yPos, player.width, player.height);

    ctx.fillStyle = 'black';
    
    switch (player.direction)
    {
        case 'r':
            if (!player.isGrounded)
            {
                ctx.fillRect(player.xPos + 8, player.yPos, 8, 8);
                ctx.fillRect(player.xPos + 24, player.yPos, 8, 8);
            } else if (player.isSneaking)
            {
                ctx.fillRect(player.xPos + 8, player.yPos + 16, 8, 8);
                ctx.fillRect(player.xPos + 24, player.yPos + 16, 8, 8);
            } else
            {
                ctx.fillRect(player.xPos + 8, player.yPos + 8, 8, 8);
                ctx.fillRect(player.xPos + 24, player.yPos + 8, 8, 8);
            }
            break;
        case 'l':
            if (!player.isGrounded) {
                ctx.fillRect(player.xPos + 8, player.yPos, 8, 8);
                ctx.fillRect(player.xPos + 24, player.yPos, 8, 8);
            } else if (player.isSneaking) {
                ctx.fillRect(player.xPos, player.yPos + 16, 8, 8);
                ctx.fillRect(player.xPos + 16, player.yPos + 16, 8, 8);
            } else {
                ctx.fillRect(player.xPos, player.yPos + 8, 8, 8);
                ctx.fillRect(player.xPos + 16, player.yPos + 8, 8, 8);
            }
            break;
    }
}
 
function handlePlayerMovement()
{
    if (keys[32] || keys[87] || keys[38])
    {
        if (!player.isJumping && player.isGrounded)
        {
            player.isJumping = true;
            player.isGrounded = false;
            player.yVelocity = -player.jumpHeight * 2;
        }
    }
}

function handlePhysics()
{

}

function playerController()
{
    handlePlayerMovement();
    handlePhysics();

    drawPlayer();
}