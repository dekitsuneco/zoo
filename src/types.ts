const animalTypes = ['giraph', 'wolf', 'hippo'] as const;
type AnimalTypes = typeof animalTypes[number];

const animalTraits = ['height', 'speed', 'weight'] as const;
type AnimalTraits = typeof animalTraits[number];

enum TraitPerAnimal {
  giraph = 'height',
  wolf = 'speed',
  hippo = 'weight',
}

interface Animal {
  id: number;
  type: AnimalTypes;
  trait: AnimalTraits;
  value: number;
}

export type { AnimalTypes, AnimalTraits, Animal };
export { animalTypes, animalTraits, TraitPerAnimal };
