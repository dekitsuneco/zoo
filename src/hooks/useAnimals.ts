import { useState } from 'react';
import { Animal, animalTypes, TraitPerAnimal } from '../types';

const useAnimals = () => {
  const [caughtAnimals, setCaughtAnimals] = useState<Array<Animal>>([]);

  const createAnimal = (): Animal => {
    const getRandomAnimal = () => {
      const randomNum = Math.floor(Math.random() * animalTypes.length);

      return animalTypes[randomNum];
    };

    const getRandomTraitValue = Math.floor(Math.random() * 5) + 1;

    const type = getRandomAnimal();
    const [trait, value] = [TraitPerAnimal[type], getRandomTraitValue];

    return {
      id: Date.now(),
      type,
      trait,
      value,
    };
  };

  const catchNewAnimal = () => {
    setCaughtAnimals((prev) => [...prev, createAnimal()]);
  };

  return [caughtAnimals, setCaughtAnimals, catchNewAnimal] as const;
};

export { useAnimals };
