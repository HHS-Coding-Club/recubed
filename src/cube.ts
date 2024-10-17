const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const reCubedSettings: { 
    name: string, 
    author: string, 
    version: string, 
    fps: number, 
    canWidth: number, 
    canHeight: number 
} = {
    name: "CubeDood: ReCubed",
    author: "Colack",
    version: "0.0.1",

    fps: 144,
    canWidth: 800,
    canHeight: 640
}

var player: {
    xPos: number,
    yPos: number,
    width: number,
    height: number,
    xVel: number,
    yVel: number,

    costume: string,
    direction: string,

    isJumping: boolean,
    isGrounded: boolean,

    jumpHeight: number,
    gravity: number,
    friction: number,
    currentSpeed: number,

    slowSpeed: number,
    highSpeed: number,
    defaultSpeed: number
} = {
    xPos: 0,
    yPos: 0,
    width: 32,
    height: 32,
    xVel: 0,
    yVel: 0,

    costume: "cd",
    direction: "right",

    isJumping: false,
    isGrounded: false,

    jumpHeight: 3.3,
    gravity: 0.215,
    friction: 0.92,
    currentSpeed: 4,

    slowSpeed: 1,
    highSpeed: 6,
    defaultSpeed: 4
};

var keys = [] as boolean[];

document.addEventListener('keydown', (e) => {
    keys[e.keyCode] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.keyCode] = false;
});

function init()
{
    console.log(reCubedSettings.name + " v" + reCubedSettings.version + " by " + reCubedSettings.author);
}

init();