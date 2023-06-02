var zyeldicaParty = ["Lellimus", "Harmony", "Alrich", "Sunny"];
var lellimusParty = ["Lellimus", "Zenya", "Karina", "Leon", "Duin"];
var soldariParty = ["Luk", "Ennui", "Koraki", "Pita Chip", "Niklaus"];

console.log(zyeldicaParty);
console.log(lellimusParty);
console.log(soldariParty);

//soldariParty.sort();
console.log(soldariParty);

var cityOfEnlightenmentParty = zyeldicaParty.slice(1);
cityOfEnlightenmentParty.push("Warryn", "Adamina");
console.log(cityOfEnlightenmentParty);

// slice works differently now because the array has been sorted
var newSoldariParty = soldariParty.slice(0,-1);
console.log(newSoldariParty);