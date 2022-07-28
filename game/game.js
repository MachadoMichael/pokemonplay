function gameRules(turn) {
    if (life_boss <= 0) {
        lifeBoss_Score.innerText = `LIFE: DEAD`;
        stage = 0;
        teacherTalk.innerText = `WINNER o mewtwo morreu`;
    } 
    
    else if(life_pokemon <= 0) {
        lifePlayer_Score.innerText = `LIFE: DEAD`;
        stage = 0;
        teacherTalk.innerText = `GAMEOVER o seu pokemon morreu! Deseja reiniciar o jogo?`;
    }
    
    else {
        lifeBoss_Score.innerText = `LIFE: ${life_boss}`;
        lifePlayer_Score.innerText = `LIFE: ${life_pokemon}`;
        damageBoss.innerText = `DAMAGE: ${atack_boss}`
        stage = turn;
    }
    Gameturn();
    console.log('Regras conferidas')
}

function Gameturn(){
    switch (stage) {
        case 0:
            changeDisplay(combatButtons, 'none');
            changeDisplay(restartGame, 'initial');
            break;
    
        case 1:
            console.log('stage 1')
            changeDisplay(teacherTalk, 'initial');
            changeDisplay(combatButtons, 'initial');
            teacherTalk.innerText = 'No seu turno você deve optar por atacar ou defender, em seguida será o turno do Mewtwo'
            break;
    
        case 2:
            changeDisplay(combatButtons, 'none');
            teacherTalk.innerText = 'Mewtwo sempre ataca em seu turno e ao fim do seu atack ele ganha + 10 de dano'
            mewtwoMove()
            break;
    }
}

function playerMove(move){
    if(move == 'atack'){
        life_boss -= atack_pokemon;
    }
    if(move == 'heal'){
        life_pokemon += heal_pokemon;
    }
    gameRules(2)
}

function mewtwoMove(){
    life_pokemon -= atack_boss;
    atack_boss += 10;
    setTimeout(function changeStage() {
        gameRules(1)
    }, 2000)
}