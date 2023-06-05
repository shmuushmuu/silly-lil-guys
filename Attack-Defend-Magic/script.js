function init() {
    var wins = 0;
    var losses = 0;
    var ties = 0;

    var playGame = function(){
        var choices = 'adc';
        var userChoice = prompt("Press a to attack your opponent while they are casting a spell, press d to defend against an opponent's attack, or press c to cast a spell using your own magic and get past your opponent's defense.");
        var random = Math.floow(Math.random() * choices.length);
        var compChoice = choices[random];
    }

    if (userChoice) {
        userChoice = userChoice.toLowerCase()[0];
    }
    
    } if (userChoice === 'a' && compChoice === 'c') {
        alert('Your attack interrupted their spellcasting. You win this round!');
        wins++;
    } else if (userChoice === 'd' && compChoice === 'a') {
        alert("You parried your opponent's attack, and hit them with the opening that was created. You win this round!");
        wins++;
    } else if (userChoice === 'c' && compChoice === 'd') {
        alert ("Your opponent braced themselves for your attack, but you cast a spell that they could not avoid. You win this round!");
        wins ++;
    } else if (userChoice === 'a' && compChoice === 'a') {
        alert ('You and your opponent both lunge at each other, your weapons colliding and richoteting off of each other with a loud "CLANG!" -- nobody wins this round.');
        ties ++;

        // pick up here with the rest of the ties and the losses, finish this out

    }




    // if (user.attack && computer.defend) {
    //     user.wins;
    // } else if (user.attack && computer.magic) {
    //     user.loses;
    // } else if (user.attack && computer.attack) {
    //     user.ties;
    // } else if (user.defend && computer.defend) {
    //     user.ties;
    // } else if (user.defend && computer.magic) {
    //     user.wins;
    // } else if (user.defend && computer.attack) {
    //     user.loses;
    // } else if (user.magic && computer.defend) {
    //     user.loses;
    // } else if (user.magic && computer.magic) {
    //     user.ties;
    // } else (user.magic && computer.attack) {
    //     user.wins;
    // };

    
    playGame();
};

init();