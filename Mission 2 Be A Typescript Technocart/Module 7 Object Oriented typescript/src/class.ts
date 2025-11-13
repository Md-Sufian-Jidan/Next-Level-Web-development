// oop - class >>> object

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(`${this.name} is making  sound: ${this.sound}`);
//     };
// };


// parameters properties

class Animal {
    constructor(public name: string, public species: string, public sound: string) {

    }

    makeSound() {
        console.log(`${this.name} is making  sound: ${this.sound}`);
    };
};

const dog = new Animal('Dogesh bhai', 'Dog', 'Bau Bau');

const cat = new Animal('Catesh bhai', 'Cat', 'Meow Meow');

dog.makeSound();

cat.makeSound();