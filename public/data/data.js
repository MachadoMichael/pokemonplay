
let pokemons = [

    charmander = {
        life: 180,
        atack: 50,
        heal: 30
    },

    squirtle = {
        life: 210,
        atack: 35,
        heal: 40
    }, 

    bulbasaur = {
        life: 230,
        atack: 20,
        heal: 50
    },

    pikachu = {
        life: 150,
        atack: 50,
        heal: 25
    },

    mewtwo = {
        life: 230,
        atack: 20,
    }

];

let homepage = $('#homepage');
let select_pokemon_screen = $('#select_pokemon_screen');
let profCarv = $('#profCarv');
let infoMewtwo = $('#infoMewtwo');
let battlefield = $('#battlefield');


let pokemonFire = document.getElementById('pokemonFire');
let pokemonWater = document.getElementById('pokemonWater');
let pokemonGrass = document.getElementById('pokemonGrass');
let pokemonEletric = document.getElementById('pokemonEletric');
let pokemonPsychic = document.getElementById('pokemonPsychic');

let fire = document.getElementById('fire');
let water = document.getElementById('water');
let grass = document.getElementById('grass');
let eletric = document.getElementById('eletric');

let pokeballImage = './assets/images/pokebola.png';
let profTalk = document.getElementById('profTalk');
let pokemon_confirmation_screen = document.getElementById('pokemon_confirmation_screen');
let start_combat = document.getElementById('start_combat');

let playerPokemon = document.getElementById('playerPokemon');

let lifeBoss_Score = document.getElementById('lifeBoss');
let damageBoss_Score = document.getElementById('damageBoss');


let lifePlayer_Score = document.getElementById('lifePlayer');
let damagePlayer_Score = document.getElementById('damagePlayer');
let healPlayer_Score = document.getElementById('healPlayer');

let life_boss = mewtwo.life;
let atack_boss = mewtwo.atack;

let life_pokemon = '';
let atack_pokemon = '';
let heal_pokemon = '';


let teacherTalk = document.getElementById('teacherTalk');
let combatButtons = document.getElementById('combatButtons');
let restartGame = document.getElementById('restartGame');
let stage = '';








