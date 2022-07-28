function menuGame() {
    battlefield.fadeOut(1000);
    startGame();
    homepage.fadeOut(2000);

    select_pokemon_screen.css("display", "flex");
    select_pokemon_screen.fadeIn(1000);

    setTimeout(() => {
        profCarv.css("display", "flex");
        profCarv.fadeIn(500);
    }, 2000)
    profTalk.innerText = "Olá! Meu nome é Professor Carvalho. Sou um pokeBiologo e estou aqui para lhe ajudar nesse momento tão importante. A hora de escolher o seu pokemon de batalha! Clique em uma pokebola prosseguirmos."
    closePokeballs();

    changeDisplay(start_combat, 'none');
    changeDisplay(restartGame, 'none');
}

function startGame() {
    console.log('jogo iniciado')

    charmander.life = 180;
    squirtle.life = 210;
    bulbasaur.life = 230;
    pikachu.life = 150;

    life_boss = 230;
    atack_boss = 20;

    stage = 1;
}

function changeDisplay(element, displayReq) {
    element.style.display = displayReq;
}

function chosenPokemon(pokemonType) {

    changeDisplay(pokemon_confirmation_screen, 'initial');
    closePokeballs();

    if (pokemonType == 'pokemonFire') {
        pokemonChoice = charmander
    }
    if (pokemonType == 'pokemonWater') {
        pokemonChoice = squirtle
    }
    if (pokemonType == 'pokemonGrass') {
        pokemonChoice = bulbasaur
    }
    if (pokemonType == 'pokemonEletric') {
        pokemonChoice = pikachu
    }

    switch (pokemonChoice) {
        case charmander:
            pokemonFire.src = './assets/images/charmander.png';
            fire.style.backgroundImage = 'url(./assets/images/fire.jpg)';
            playerPokemon.src = './assets/images/charmander.png';
            profTalk.innerText = ` Charmander é um pokemon do tipo fogo, possui ${charmander.life} de vida, seu atack causa ${charmander.atack} de dano e sua cura é de ${charmander.heal}. Deseja escolher Charmander como seu pokemon ?`
            atack_pokemon = charmander.atack
            heal_pokemon = charmander.heal
            life_pokemon = charmander.life
            break;

        case squirtle:
            pokemonWater.src = './assets/images/squirtle.png';
            water.style.backgroundImage = 'url(./assets/images/water.jpg)';
            playerPokemon.src = './assets/images/squirtle.png';
            profTalk.innerText = ` squirtle é um pokemon do tipo agua, possui ${squirtle.life} de vida, seu atack causa ${squirtle.atack} de dano e sua cura é de ${squirtle.heal}. Deseja escolher Squirtle como seu pokemon ?`
            atack_pokemon = squirtle.atack
            heal_pokemon = squirtle.heal
            life_pokemon = squirtle.life
            break;

        case bulbasaur:
            pokemonGrass.src = './assets/images/bulbasaur.png';
            grass.style.backgroundImage = 'url(./assets/images/grass.jpg)';
            playerPokemon.src = './assets/images/bulbasaur.png';
            profTalk.innerText = ` bulbasaur é um pokemon do tipo grama, possui ${bulbasaur.life} de vida, seu atack causa ${bulbasaur.atack} de dano e sua cura é de ${bulbasaur.heal}. Deseja escolher Bulbasaur como seu pokemon ?`
            atack_pokemon = bulbasaur.atack
            heal_pokemon = bulbasaur.heal
            life_pokemon = bulbasaur.life
            break;

        case pikachu:
            pokemonEletric.src = './assets/images/pikachu.png';
            eletric.style.backgroundImage = 'url(./assets/images/eletric.jpg)';
            playerPokemon.src = './assets/images/pikachu.png';
            profTalk.innerText = ` pikachu é um pokemon do tipo elétrico, possui ${pikachu.life} de vida, seu atack causa ${pikachu.atack} de dano e sua cura é de ${pikachu.heal}. Deseja escolher Pikachu como seu pokemon ?`
            atack_pokemon = pikachu.atack
            heal_pokemon = pikachu.heal
            life_pokemon = pikachu.life
            break;
    }
}

function closePokeballs() {
    fire.style.backgroundImage = '';
    water.style.backgroundImage = '';
    grass.style.backgroundImage = '';
    eletric.style.backgroundImage = '';

    pokemonFire.src = pokeballImage;
    pokemonWater.src = pokeballImage;
    pokemonGrass.src = pokeballImage;
    pokemonEletric.src = pokeballImage;
}

function infoBoss() {
    select_pokemon_screen.fadeOut(1000);
    infoMewtwo.css("display", "flex");
    infoMewtwo.fadeIn(1000);

    changeDisplay(pokemon_confirmation_screen, 'none');
    changeDisplay(start_combat, 'inline');
    changeDisplay(pokemonPsychic, 'flex');

    setTimeout(() => {
        profTalk.innerText = ` Mewtwo é um pokemon do tipo psíquico, possui ${mewtwo.life} de vida, seu atack causa ${mewtwo.atack}. Porém seu atack aumenta em 10 sempre que seu turno acaba. Ele será o seu adversário hoje, boa sorte !`
    }, 900)

}

function startFight() {
    profCarv.fadeOut(1000);
    infoMewtwo.fadeOut(1000);
    battlefield.fadeIn(1000);


    lifeBoss_Score.innerText = `LIFE: ${life_boss}`;
    damageBoss_Score.innerText = `DAMAGE: ${atack_boss}`

    lifePlayer_Score.innerText = `LIFE: ${life_pokemon}`;
    damagePlayer_Score.innerText = `DAMAGE: ${atack_pokemon}`
    healPlayer_Score.innerText = `HEAL: ${heal_pokemon}`

    gameRules(1);
}


