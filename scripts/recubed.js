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
*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 640;

// Run the update function 60 times per second.
setInterval(update, 1000 / 60);

function update() {
    drawBackground('black');
    drawText('CubeDood: ReCubed', 10, 32, 32, 'white');

    playerController();
}