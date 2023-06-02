var dndParty = [Shove, Try, Robot, MagicMan];

var Shove = {
    player: "Shmuu",
    race: "Human",
    class: "Ranger",
    subclass: "Gloom Stalker",
    level: 5,
    alignment: "lawful neutral",
    isAlive: true,
    partyMembers: [Try, Robot, MagicMan],
    attack: function (AttackRoll, ArmorClass) {
        console.log("Shove aims his revolver at a target and pulls the trigger -- roll a d20, and add 7 to get your attack roll.")
        if (AttackRoll >= ArmorClass) {
            console.log("Shove's attack landed! Roll 1d8, and add 4 to the total to find your damage total.")
        } else {
            console.log("Shove's attack missed!")
        }
    }
};

var Try = {
    player: "Samantha",
    race: "Loxodon",
    class: "Bard",
    subclass: "College of lore",
    level: 5,
    alignment: "no clue dude",
    isAlive: true,
    partyMembers: [Shove, Robot, MagicMan],

};

var Robot = {
    player: "Johnathan",
    race: "Automaton",
    class: "Artificer",
    subclass: "Armorer",
    level: 5,
    alignment: "uh whatever he was designated, I guess",
    isAlive: true,
    partyMembers: [Shove, Try, MagicMan],

};

var MagicMan = {
    player: "Chris",
    race: "Eladrin",
    subclass: "School of Chronurgy",
    level: 5,
    class: "Wizard",
    alignment: "Prolly chaotic something",
    isAlive: true,
    partyMembers: [Shove, Try, Robot],

};