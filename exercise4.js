
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0]);

avengers[0]="IRONMAN"

console.log(avengers);

console.log(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

const rickAndMortyCharactersA = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersA.pop();

console.log(rickAndMortyCharactersA[0]);
console.log(rickAndMortyCharactersA[rickAndMortyCharactersA.length - 1]);

rickAndMortyCharactersA.splice(1, 1);

console.log(rickAndMortyCharactersA);
