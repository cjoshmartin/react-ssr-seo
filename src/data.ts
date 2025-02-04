enum Species {
    Human = 'Human',
    Dog = 'Dog',
}

enum Gender {
    Male = 'Male',
    Female = 'Female',
    UnGendered = 'UnGendered',
}

export interface LivingThing {
    id: number;
    imgUrl: string;
    name: string;
    age: number;
    species: Species;
    description: string;
    height: number; // inches
    gender: Gender 
}

export function getSpeciesEmoji(species: Species): string {
    switch (species) {
        case Species.Human:
            return '👨';
        case Species.Dog:
            return '🐶';
        default:
            return '❓';
    }
}

export const livingThingsData: LivingThing[] = [{
    id: 1,
    imgUrl: '/josh.jpg',
    name: 'Josh',
    age: 28,
    height: 71,
    species: Species.Human,
    gender: Gender.Male,
    description: 'Josh is a software engineer who loves to code, often found in front of a computer late at night'
}, 
{
    id: 2,
    imgUrl: '/buddy.jpg',
    name: 'Buddy',
    age: 8,
    height: 19,
    species: Species.Dog,
    gender: Gender.Male,
    description: 'Buddy is a dog who loves to play fetch, a little grumpy at times and mostly cat like for a dog. Loves to be chased and receive back scratches. He is the brains of the operation... All the other dogs are just muscle.'
}, 
{
    id: 3,
    imgUrl: '/luke.jpg',
    name: 'Luke',
    age: 3,
    height: 21,
    species: Species.Dog,
    gender: Gender.Male,
    description: 'Although he is a little bit of a scaredy cat; Luke is the son of Buddy, he is a little more energetic and loves to play with his toys. Always ready to go for a walk and your attention. He knows how to win you over with his charm and cunning attitude.'
}];