/*
    Audio.js

    Audio library for CubeDood: ReCubed
*/

var SFX_Playing = false;

var RECUBED_main_menu = new Audio("assets/ost/CubeDood ReCubed.mp3");
var RECUBED_settings_menu = new Audio("assets/ost/Meeting with the Cube.mp3");
var RECUBED_soundTest_menu = new Audio("assets/ost/Sound Test.mp3");
var RECUBED_credits_menu = new Audio("assets/ost/Squared Impared.mp3");

var RECUBED_level_bolt = new Audio("assets/ost/BOLT!.mp3");
var RECUBED_level_4sided = new Audio("assets/ost/4 Sided Blighted.mp3");
var RECUBED_level_boltDash = new Audio("assets/ost/BOLT and DASH!.mp3");
var RECUBED_level_cubedDash = new Audio("assets/ost/Cubed and Dash!.mp3");
var RECUBED_level_etTu = new Audio("assets/ost/Et tu, Cube.mp3");
var RECUBED_level_fightMight = new Audio("assets/ost/Fight with Might.mp3");
var RECUBED_level_fireWill = new Audio("assets/ost/Fire at will!.mp3");
var RECUBED_level_squared = new Audio("assets/ost/Simply Squared.mp3");
var RECUBED_level_direction = new Audio("assets/ost/Swing in the right Direction.mp3");

var RECUBED_cutscene_blast = new Audio("assets/ost/Blast from the Past.mp3");
var RECUBED_cutscene_revenge = new Audio("assets/ost/CubeTops Revenge; Return of the Hero.mp3");
var RECUBED_cutscene_equation = new Audio("assets/ost/Functional Equation.mp3");
var RECUBED_cutscene_return = new Audio("assets/ost/Return of CubeTop.mp3");
var RECUBED_cutscene_ending = new Audio("assets/ost/The Memory Snatcher.mp3");
var RECUBED_cutscene_narcissist = new Audio("assets/ost/The Narcissist.mp3");

var RECUBED_boss_brute = new Audio("assets/ost/Brutish Fighter, Cubed and Everything!.mp3");
var RECUBED_boss_cubie = new Audio('assets/ost/Cylinder Blunder.mp3');
var RECUBED_boss_tophat = new Audio('assets/ost/Dance With Me CubeDood!.mp3');
var RECUBED_boss_maximumTophat = new Audio('assets/ost/Maximus Square.mp3');
var RECUBED_boss_falsedood = new Audio('assets/ost/Quadrilateral Collateral.mp3');

RECUBED_main_menu.loop = true;
RECUBED_level_bolt.loop = true;

function handlePlayerSFX(sfx)
{
    if (!SFX_Playing)
    {

    }
}