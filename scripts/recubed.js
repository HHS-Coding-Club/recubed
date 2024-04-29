/*
    TODO: 
        - Change audio / music playing from running off of the recubed.js file running on the audio.js file. (audioPlaying to MUSIC_playing or smth)
        - Move rendering completely to the graphics.js file
        - Add new objects lol
        - Get new spike sprites
*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var video = document.getElementById('video');

const game = {
    name: "CubeDood: ReCubed", // Project ReCubed
    version: {
        major: 0,
        minor: 0,
        patch: 16
    },
    author: "Studio Cubed"
}

canvas.width = 800;
canvas.height = 640;

var easterEggWorking = false;

var lastUpdateTime = performance.now();
var deltaTime = 0;
var fpsInterval = 1000 / 60;

var levelHasStarted = false;

var currentMenuOption = "start";

var currentPlayableCharacter = "CubeTop"; // CubeDood, CubeTop, Cubie, and CubeBrute

var canPressKey = true;
var audioPlaying = false;

var currentMainMenuOption = 0;

var debugMode = true;

var currentLevel = 1;

var level = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 4, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 10, 10, 10, 12, 0, 0, 0, 0, 0, 13, 0, 14, 0]
];

var levelForeground = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function update() 
{
    requestAnimationFrame(update);

    clearCanvas();

    var currentTime = performance.now();
    var elapsed = currentTime - lastUpdateTime;

    deltaTime += elapsed;

    menuUpdate();
    debugMode ? drawDebug(elapsed) : null;

    while (deltaTime >= fpsInterval)
    {
        menuControls();
        deltaTime -= fpsInterval;
    }

    lastUpdateTime = currentTime;
}

/*
    drawToScreen
    There are 5 different layers to draw to the screen:
    - Background
    - Foreground
    - Objects (level)
    - Player
    - UI
*/
function drawLevelToScreen()
{
    clearCanvas();

    drawBackgroundImage();
    drawForeground();
    drawLevel(level);
    drawPlayer(currentPlayableCharacter);
    drawUI();
}

/*
    menuUpdate
    This is menu control and drawing function
*/
function menuUpdate()
{
    switch (currentMenuOption) {
        case "start":
            drawStartScreen();
            break;
        case "main":
            if (!easterEggWorking) {
                drawMainMenu();
                switch (currentMainMenuOption) {
                    case 0:
                        drawMainMenuOptions("start");
                        break;
                    case 1:
                        drawMainMenuOptions("options");
                        break;
                    case 2:
                        drawMainMenuOptions("credits");
                        break;
                }

                handleMusicPlay(RECUBED_main_menu);
            } else {
                handleMusicStop(RECUBED_main_menu);
            }

            break;
        case "game":
            if (!levelHasStarted)
            {
                startLevel(level);
                handleMusicPlay(RECUBED_level_bolt);
            }
        

            drawLevelToScreen();
            break;
    }
}

/*
    menuControls
    This is controls for each menu
*/
function menuControls()
{
    switch (currentMenuOption) {
        case "start":
            if (keys[32] && canPressKey) currentMenuOption = "main";
            setKeyTimeout(32);
            break;
        case "main":
            if (keys[32] && canPressKey) {
                currentMenuOption = "game"; 
                handleMusicStop(RECUBED_main_menu);
            }

            // If up or w is pressed 
            if (canPressKey) {
                if (keys[38] || keys[87]) {
                    currentMainMenuOption--;
                    if (currentMainMenuOption < 0) currentMainMenuOption = 2;
                    setKeyTimeout(38);
                } else if (keys[40] || keys[83]) {
                    currentMainMenuOption++;
                    if (currentMainMenuOption > 2) currentMainMenuOption = 0;
                    setKeyTimeout(40);
                }
            }

            easterEgg();

            setKeyTimeout(32);
            break;
        case "game":
            playerController();
            break;
    }
}

function startLevel(level)
{
    // Load the level, and start the player at the start position.

    for (var i = 0; i < level.length; i++)
    {
        for (var j = 0; j < level[i].length; j++)
        {
            if (level[i][j] == 3)
            {
                player.xPos = j * 32;
                player.yPos = i * 32;

                player.start_xPos = j * 32;
                player.start_yPos = i * 32;
            }
        }
    }

    levelHasStarted = true;
}

function easterEgg() {
    // See if the player is holding J and K at the same time
    if (keys[74] && keys[75]) {
        if (!easterEggWorking) {
            easterEggWorking = true;
            // play the video
            video.style.display = "block";
            video.currentTime = 0;
            video.play();
            canvas.style.display = "none";

            setTimeout(function() {
                video.style.display = "none";
                video.pause();
                canvas.style.display = "block";
                easterEggWorking = false;
            }, 25500);
        }
    }
}

function setKeyTimeout(keyPressed)
{
    canPressKey = false;
    keys[keyPressed] = false;
    setTimeout(function() {
        canPressKey = true;
    }, 100); 
}

requestAnimationFrame(update);