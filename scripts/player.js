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

var acceleration = 0.2;
var deceleration = 0.1;

var maxVelocity = 4;

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
            ctx.fillRect(player.xPos + 8, player.yPos + 8, 8, 8);
            ctx.fillRect(player.xPos + 24, player.yPos + 8, 8, 8);
            break;
        case 'l':
            ctx.fillRect(player.xPos, player.yPos + 8, 8, 8);
            ctx.fillRect(player.xPos + 16, player.yPos + 8, 8, 8);
            break;
        case 'ur':
            ctx.fillRect(player.xPos + 8, player.yPos, 8, 8);
            ctx.fillRect(player.xPos + 24, player.yPos, 8, 8);
            break;
        case 'ul':
            ctx.fillRect(player.xPos, player.yPos, 8, 8);
            ctx.fillRect(player.xPos + 16, player.yPos, 8, 8);
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

    if (keys[37] || keys[65])
    {
        if (player.xVelocity > -player.speed)
        {
            player.xVelocity--;
            player.direction = 'l';
        }
    }

    if (keys[39] || keys[68])
    {
        if (player.xVelocity < player.speed)
        {
            player.xVelocity++;
            player.direction = 'r';
        }
    }

    if (keys[16])
    {
        player.speed = 8;
    } else if (keys[90])
    {
        player.speed = 1;
    } else
    {
        player.speed = 4;
    }
}

function handlePhysics()
{
    if (player.yPos < canvas.height - player.height)
    {
        player.isJumping = true;
        player.isGrounded = false;
    }

    player.xVelocity *= player.friction;
    player.yVelocity += player.gravity;
    player.xPos += player.xVelocity;
    player.yPos += player.yVelocity;

    if (player.xPos >= canvas.width - player.width)
    {
        player.xPos = canvas.width - player.width;
    } else if (player.xPos <= 0)
    {
        player.xPos = 0;
    }

    if (player.yPos >= canvas.height - player.height)
    {
        player.yPos = canvas.height - player.height;
        player.isJumping = false;
        player.isGrounded = true;
    }

    if (player.isJumping && !player.isGrounded)
    {
        if (player.direction == 'r')
        {
            player.direction = 'ur';
        } else if (player.direction == 'l')
        {
            player.direction = 'ul';
        }
    } else 
    {
        if (player.direction == 'ur')
        {
            player.direction = 'r';
        } else if (player.direction == 'ul')
        {
            player.direction = 'l';
        }
    }

    collisionCheck(level);
}

function collisionSide(player, tile)
{
    var deltaX = player.xPos + player.width / 2 - (tile.xPos + tile.width / 2);
    var deltaY = player.yPos + player.height / 2 - (tile.yPos + tile.height / 2);

    if (Math.abs(deltaX) > Math.abs(deltaY))
    {
        return deltaX > 0 ? "r" : "l";
    } else {
        return deltaY > 0 ? "b" : "t";
    }
}

function collisionCheck(level)
{
    for (var i = 0; i < level.length; i++)
    {
        for (var j = 0; j < level[i].length; j++)
        {
            var x = j * 32;
            var y = i * 32;
            var tile = {
                xPos: x,
                yPos: y,
                width: 32,
                height: 32
            }
            var collision = player.xPos < x + tile.width && player.xPos + player.width > x && player.yPos < y + tile.height && player.yPos + player.height > y;
            if (!collision) continue;
            switch (level[i][j])
            {
                case 0: // Empty Block 
                    break;
                case 1: // Flag
                    // Level Completed
                    break;
                case 2: // Teleporter Block
                    break;
                case 3: // Teleporter Receiver
                    break;
                case 4: // Wall
                    var side = collisionSide(player, tile);
                    switch (side)
                    {
                        case "b":
                            player.yPos = tile.yPos + tile.height;
                            player.yVelocity = 0;
                            break;
                        case "t":
                            player.isGrounded = true;
                            player.isJumping = false;
                            player.yPos = tile.yPos - player.height;
                            player.yVelocity = 0;

                            if (player.direction == 'ur') {
                                player.direction = 'r';
                            } else if (player.direction == 'ul') {
                                player.direction = 'l';
                            }
                            
                            break;
                        case "r":
                            player.xPos = tile.xPos + tile.width;
                            player.xVelocity = 0;
                            break;
                        case "l":
                            player.xPos = tile.xPos - player.width;
                            player.xVelocity = 0;
                            break;
                    }
                    break;
                case 5: // Spike
                    break;
                case 6: // Coin
                    break;
                case 7: // Lava
                    break;
                case 8: // Bounce Pad
                    break;
                case 9: // Start Pos
                    break;
                case 10: // TopHat
                    break;
                case 11: // Mini Platform
                    break;
                case 12: // Ice Block
                    break;
            }
        }
    }
}

function playerController()
{
    handlePlayerMovement();
    handlePhysics();
}