/*
    cutscenes.js

    Cutscene library for CubeDood: ReCubed
*/

var cutscenePlaying = false;

const RECUBED_cutscenes = [
    {
        name: "Example Cutscene",
        audio: RECUBED_soundTest_menu,
        description: "You should not see this cutscene in the game.",
        script: [
            {
                speaker: "CubeDood", // Speaker of the line. This can be CubeDood, CubeTop, Cubie, Brute, FalseDood, or Maximum CubeTop
                actors: [
                    "Cubie",
                    "CubeTop",
                    "CubeBrute"
                ], // Actors in the scene. This is an array of strings.
                actorsPos: [
                    "0, 0",
                    "64, 0",
                    "128, 0"
                ], // Actors positions, being X, Y
                line: "Hello, World!", // Line of dialogue. Is placed in the dialogue box.
                duration: 5, // Duration of the line in seconds.
                textSpeed: 1, // Speed of the text. 1 is normal, 2 is fast, 0 is slow.
                audio: RECUBED_SFX_example, // This is a bell sound.
                audioTime: 3.5, // When the audio should play.

                xPos: 0, // X position of the speaker. This is in pixels.
                yPos: 0, // Y position of the speaker. This is in pixels.
                
                cameraX: 0, // X position of the camera. This is in pixels.
                cameraY: 0, // Y position of the camera. This is in pixels.

                background: RECUBED_assets_example, // Background image for the cutscene. 
            },
            {
                speaker: "CubeTop",
                line: "Hello, CubeDood!",
                duration: 5,
                textSpeed: 1,
                audio: RECUBED_SFX_example,
                audioTime: 3.5,

                xPos: 0,
                yPos: 0,
                
                cameraX: 0,
                cameraY: 0,

                background: RECUBED_assets_example,
            }
        ],
        onComplete: function() {
            // This function is called when the cutscene is over.
        }
    }
]