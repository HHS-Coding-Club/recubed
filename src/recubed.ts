/*
    Global variables and settings
*/

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')

const reCubedSettings: {
  name: string
  author: string
  version: string
  fps: number
  canWidth: number
  canHeight: number
} = {
  name: 'CubeDood: ReCubed',
  author: 'Colack',
  version: '0.0.1',

  fps: 144,
  canWidth: 800,
  canHeight: 640,
}

var player: {
  xPos: number
  yPos: number
  width: number
  height: number
  xVel: number
  yVel: number
  costume: string
  direction: string
  isJumping: boolean
  isGrounded: boolean
  jumpHeight: number
  gravity: number
  friction: number
  currentSpeed: number
  slowSpeed: number
  highSpeed: number
  defaultSpeed: number
} = {
  xPos: 0,
  yPos: 0,
  width: 32,
  height: 32,
  xVel: 0,
  yVel: 0,

  costume: 'cd',
  direction: 'right',

  isJumping: false,
  isGrounded: false,

  jumpHeight: 3.3,
  gravity: 0.215,
  friction: 0.92,
  currentSpeed: 4,

  slowSpeed: 1,
  highSpeed: 6,
  defaultSpeed: 4,
}

const keyDelayTime: number = 150;

const debug: { fps: boolean, deltaTime: boolean, canJump: boolean, gameState: boolean } = {
  fps: false,
  deltaTime: false,
  canJump: false,
  gameState: false 
}

const keyBinds: { [key: string]: number } = {
  "up": 38,
  "down": 40,
  "left": 37,
  "right": 39,
  "w": 87,
  "s": 83,
  "a": 65,
  "d": 68,
  "space": 32,
  "z": 90,
  "x": 88,
  "enter": 13,
}

var keys = [] as boolean[]

document.addEventListener('keydown', e => {
  keys[e.keyCode] = true
})

document.addEventListener('keyup', e => {
  keys[e.keyCode] = false
})

/*
  Images and Sprites
*/

var IMAGE_logo = new Image() as HTMLImageElement
var IMAGE_goal = new Image() as HTMLImageElement

/*
  Audio
*/
const AUDIO_songlist: {
  name: string
  description: string
  file: string
  game: string
}[] = [
  {
    name: '4 Sided Blighted',
    description:
      'A chill, mysterious beat, mainly for background music and cutscenes.',
    file: 'assets/ost/4 Sided Blighted.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'Angie',
    description: 'For Angie, someone close to me.',
    file: 'assets/ost/Angie.wav',
    game: 'CubeDood: ReCubed',
  },
  {
    name: 'Another Day Another Vibe',
    description:
      "A jazzy lofi beat, for when you're feeling down, or in the settings menu.",
    file: 'assets/ost/Another Day Another Vibe.wav',
    game: 'CubeDood: ReCubed',
  },
  {
    name: 'Blast from the Past',
    description: 'This song will shoot you back to the original CubeDood!',
    file: 'assets/ost/Blast from the Past.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'BOLT and DASH!',
    description:
      'A remix of BOLT! from the original CubeDood, now with a louder piano, and a groovier drum.',
    file: 'assets/ost/BOLT and DASH!.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'BOLT!',
    description: 'One of the classic level songs used in the first CubeDood.',
    file: 'assets/ost/BOLT!.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'Brutish Fighter, Cubed and Everything!',
    description:
      "The boss battle theme for CubeBrute, from the cancelled 'CubeDood vs The World!'.",
    file: 'assets/ost/Brutish Fighter, Cubed and Everything!.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Cubed and Dash',
    description:
      'A very, very loud rock + jazz combination, for harder levels.',
    file: 'assets/ost/Cubed and Dash.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'CubeTops Revenge; Return of the Hero',
    description: "CubeTop is back, and this time, he isn't playing games.",
    file: 'assets/ost/CubeTops Revenge_ Return of the Hero.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Cylinder Blunder',
    description:
      'Very fast and jazzy, with great Marimbas, along with a amazing Saxophone.',
    file: 'assets/ost/Cylinder Blunder.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Dance With Me CubeDood!',
    description:
      "CubeTop's boss battle theme. 'Dance with me, CubeDood! It will surely be your last!' - CubeTop",
    file: 'assets/ost/Dance With Me CubeDood!.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Et tu, Cube',
    description:
      'Level theme for anything sneaky, or fast pased. Also used for challenge levels.',
    file: 'assets/ost/Et tu, Cube.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Fight with Might',
    description:
      "A very chill theme for CubeDood vs The World!'s level editor.",
    file: 'assets/ost/Fight with Might.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Fire at will!',
    description:
      'A hidden song that would only play if CubeDood collected all of the Cubed Coins.',
    file: 'assets/ost/Fire at will!.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Functional Equation',
    description:
      "The level editor theme from CubeDood in 'The Memory Snatcher'. A very relaxed jazz song.",
    file: 'assets/ost/Functional Equation.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'Keep it plane',
    description:
      'A super freaking energetic song, meant to be the original CubeDood: ReCubed title theme.',
    file: 'assets/ost/Keep it plane.mp3',
    game: 'CubeDood: ReCubed',
  },
  {
    name: 'Lead me in the right Direction',
    description:
      "A much faster remix of 'Swing in the Right Direction' from the Original CubeDood.",
    file: 'assets/ost/Lead me in the right Direction.wav',
    game: 'CubeDood: ReCubed',
  },
  {
    name: 'Maximus Square',
    description: 'The title theme for CubeDood vs The World!',
    file: 'assets/ost/Maximus Square.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Meeting with the Cube',
    description:
      'Level editor theme and Settings theme from the Original CubeDood.',
    file: 'assets/ost/Meeting with the Cube.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'Quadrilateral Collateral',
    description: "CubeTop's boss battle theme from the Original CubeDood.",
    file: 'assets/ost/Quadrilateral Collateral.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'Return of CubeTop',
    description: "CubeTop's theme song, from the original CubeDood.",
    file: 'assets/ost/Return of CubeTop.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'Revival',
    description: 'The CubeDood: ReCubed title theme.',
    file: 'assets/ost/Revival.wav',
    game: 'CubeDood: ReCubed',
  },
  {
    name: 'Shadows',
    description:
      "A hidden song in CubeDood: ReCubed, but I'm not going to tell you how to find it. :P",
    file: 'assets/ost/Shadows.wav',
    game: 'CubeDood: ReCubed',
  },
  {
    name: 'Simply Squared',
    description:
      'A bonus song included in CubeDood vs The World!, meant to be used in level editor levels.',
    file: 'assets/ost/Simply Squared.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Sine-Cosine-Tangent',
    description: 'Another level editor theme for CubeDood: ReCubed',
    file: 'assets/ost/Sine-Cosine-Tangent.wav',
    game: 'CubeDood: ReCubed',
  },
  {
    name: 'Sound Test',
    description: 'The default sound test song from CubeDood vs The World!',
    file: 'assets/ost/Sound Test.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'Squared Impared',
    description:
      'A song that plays after you beat the game in the Original CubeDood.',
    file: 'assets/ost/Squared Impared.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'Swing in the right Direction',
    description:
      "Level song for more advanced and harder levels in CubeDood in 'The Memory Snatcher'.",
    file: 'assets/ost/Swing in the right Direction.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'The Memory Snatcher',
    description: "The title theme for CubeDood in 'The Memory Snatcher'",
    file: 'assets/ost/The Memory Snatcher.mp3',
    game: "CubeDood in 'The Memory Snatcher'",
  },
  {
    name: 'The Narcissist',
    description:
      'Theme song for Cubie, originating from CubeDood vs The World!',
    file: 'assets/ost/The Narcissist.mp3',
    game: 'CubeDood vs The World!',
  },
  {
    name: 'The Second Dimention',
    description:
      'An alternate version of the title screen theme for CubeDood: ReCubed',
    file: 'assets/ost/The Second Dimention.wav',
    game: 'CubeDood: ReCubed',
  },
];

var currentSongId: number = 0

/*
  Runtime Variables
*/
var lastUpdateTime: number = performance.now();
var deltaTime: number = 0;
var fpsInterval: number = 1000 / reCubedSettings.fps;

var inKeyDelay: boolean = false;

var gameState: string = 'load';
var menuState: string = 'main';
var gameMode: string = 'standard';
var menuSelection: number = 0;

var levelHasLoaded: boolean = false;
var levelData: {
  name: string
  author: string
  songID: number
  backgroundColor: string
  levelData: number[][]
} = {
  name: '',
  author: '',
  songID: 0,
  backgroundColor: '#000000',
  levelData: []
}

var currentLevel: number = 0;


/*
  Game Functions
*/
function update()
{
  requestAnimationFrame(update);

  var currentTime: number = performance.now();
  deltaTime = currentTime - lastUpdateTime;

  if (deltaTime >= fpsInterval)
  {
    draw();
    deltaTime = 0;
  }

  lastUpdateTime = currentTime;
}

function draw()
{

}


function init() {
  IMAGE_logo.src = 'assets/game/logo.png'
  IMAGE_goal.src = 'assets/game/goal.png'
}

init();