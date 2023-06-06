var init = function() {
    var wins = 0;
    var losses = 0;
    var ties = 0;

    var playGame = function () {
        var choices = 'adc';
        var userChoice = prompt("Press a to attack your opponent while they are casting a spell, press d to defend against an opponent's attack, or press c to cast a spell using your own magic and get past your opponent's defense.");
        var random = Math.floor(Math.random() * choices.length);
        var compChoice = choices[random];

    if (userChoice) {
        userChoice = userChoice.toLowerCase()[0];
    }

 if (userChoice === 'a' && compChoice === 'c') {
    alert("Your opponent takes a step back and begins to conjure an attack, thinking that you are putting your guard up. To their surpirse, you close the distance with your weapon drawn! Your attack interrupts their spellcasting. They try to hurry up the incantation, but you're too quick -- You win this round!");
    wins++;
} else if (userChoice === 'd' && compChoice === 'a') {
    alert("You parried your opponent's attack, and hit them with the opening that was created. You win this round!");
    wins++;
} else if (userChoice === 'c' && compChoice === 'd') {
    alert("Your opponent braced themselves for your attack, studying you. You, however, step back and channel your mana. Before they can properly counter your magic, you send an arcing bolt of lightning that connects with them. You win this round!");
    wins++;
} else if (userChoice === 'a' && compChoice === 'a') {
    alert('You and your opponent both lunge at each other, your weapons colliding and richoteting off of each other with a loud "CLANG!" -- nobody wins this round.');
    ties++;
} else if (userChoice === 'd' && compChoice === 'd') {
    alert('As you take a breath to slow your heart rate and closely watch your opponent for an opening, you ascertain that they are doing the exact same thing. Nobody moves. Nobody strikes. Nobody wins this round.');
    ties++;
} else if (userChoice === 'c' && compChoice === 'c') {
    alert("You look at your opponent's feet, and see that they are not closing the distance. You begin an incantation, and the hair on your neck stands up as you hear their muffled voice doing the same. Magic against magic? Anything could happen. You finish the sequence of words and raise your hand, arcane power crackles like lightning in your palm before darting forward, arcing like serpent. A mote of fire is launched with great velocity from your foe, which collides in catastrophic fashion with your lightning and -- *CRACKOWBOOM* -- you shield your eyes, your ears ring. Which way is up? Gather, focus. Center. Your eyes open, calmed. You see scorched earth is all that remains from the blast, and your foe is squared up on the opposite side of the now enflamed ground. Nobody wins this round.");
    ties++;
} else if (userChoice === 'a' && compChoice === 'd') {
    alert("You see your opponent lower their shoulder, as if to cast a spell. You've trained for this weakness, and step forward with Olympic capability, but -- oh no! You were too quick, they feinted you, and your side is open for them to -- *WHAM* you take a blow from their blunt weapon to the ribs of your non dominant hand. You lose this round.");
    losses++;
} else if (userChoice === 'd' && compChoice === 'c') {
    alert('"I need to counterattack" you say to yourself, studying your opponent for the right moment... it never comes, they have started speaking out loud. You realize a blast is coming your way, and you are too far away to stop them or dodge. You grit your teeth and do your best to shield yourself as a blast of arcane energy cascades upon you, detonating on your armor but not hitting your vitals. You have lost this round.');
    losses++;
} else if (userChoice === 'c' && compChoice === 'a') {
    alert("Feeling your mana thrum, you step back and prepare your spell. Your foe doesn't get any further away, instead they leap towards you. You cannot prepare your defenses and you cannot get your attack off in time -- their weapon finds purchase upon you. You have lost this round.");
    losses++;

}

alert('wins: ' + wins + '\nlosses: ' + losses + '\nties ' + ties);

var playAgain = confirm('Would you like to go another round?');

if (playAgain) {
    playGame();
} else {
    alert('Please choose a to attack, d to defend, or c to cast a spell');
    playGame();
} console.log('Get some rest for your next battle.');
};


playGame();
};

init();