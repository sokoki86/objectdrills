function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name, nickname, race, origin, attack, defense,
        describe: function() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight: function(character) {
            let taken = 0;
            let given = 0;
            if(character.attack > this.defense) {
                taken = character.attack - this.defense;
            }
            if(character.defense < this.attack) {
                given = this.attack - character.defense;
            }
            return `Your opponent takes ${given} damage and you receive ${taken} damage`;
        }
    };
}

let characters = [
    createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6),
    createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1),
    createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
    createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
    createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),
    createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Revendell", 2, 4)
];

let aragorn = characters.find(element => element.nickname === 'aragorn');
aragorn.describe();

let hobbits = characters.filter(element => element.race == "Hobbit");
console.log(hobbits);

let highAttackCharacters = characters.filter(element => element.attack > 5);
console.log(highAttackCharacters);
