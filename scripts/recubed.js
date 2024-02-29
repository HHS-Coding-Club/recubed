/*
    CubeDood: ReCubed

    Welcome back to CubeLand, where peace and calmness is the norm. Or is it?
    A new threat has emerged, a mysterious CubeTop has appeared and is causing chaos.
    It's up to you to stop him and save CubeLand once again.

    Play through 120 levels of pure cube action, with new mechanics and puzzles as 
    CubeDood returns to CubeLand in this epic reimagining of the original CubeDood.

    Game Features:
    - Main Story: Play through 120 levels of pure cube action, with new mechanics and puzzles.
    - Speedrun Mode: Play through the game with a timer, and no cutscenes, to see how fast you can complete the game.
    - Multiplayer: Play with friends in a variety of minigames, including CubeTop's Roulette, CubeTag, CubeDood's Adventure, and more.
    - Level Editor: Create your own levels and share them with the world, with the brand new and improved level editor.
    - Customization: Customize your CubeDood with a variety of skins, hats, and more, with the new customization system.
    - Achievements: Complete various tasks to earn achievements and unlock rewards.
    - Save Data: Finally, you can save your progress and continue where you left off, with the new save data system.

    CubeDood: ReCubed is coming soon to web browsers near you. Stay tuned for more information.
*/

/*
    JavaScript files for CubeDood: ReCubed.

    - recubed.js: Main file for the game, bootstraps the game and runs everything in a loop.
    - editor.js: Level editor for CubeDood: ReCubed, allows you to create your own levels.
    - controls.js: Controls for the game, basically just a huge event handler.
    - graphics.js: Extra functions and methods for screwing around with the graphics and looks of the game.
    - player.js: Player functions and how the player works.
*/

/*
    Notes:
        - Add a CubeDood ReCubed demo for the 8th graders at Tri-Tech to play.
            Due Date: Assuming 3/14 atm. May be a different time.

            This demo will include:
                - 40 levels for the kids to try.
                - A working version of the level editor.
                - A sneak peak of the final boss.
                - A cutscene explaining the game with CubeDood explaining how he moves.

            CubeDood: ReCubed (Regular Version) will include a easter egg where if you type the key combination
            "demo" on the title screen, you will be redirected to the demo version of the game. 
*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 640;

var lastUpdateTime = performance.now();
var deltaTime = 0;
var fpsInterval = 1000 / 60

var level = [];

function update() {
    requestAnimationFrame(update);

    var currentTime = performance.now();
    var elapsed = currentTime - lastUpdateTime;

    deltaTime += elapsed;

    while (deltaTime >= fpsInterval)
    {
        playerController();
        deltaTime -= fpsInterval;
    }

    drawSprites();

    lastUpdateTime = currentTime;
}

function drawSprites()
{
    drawBackground("orange");
    drawPlayer();
}

requestAnimationFrame(update);