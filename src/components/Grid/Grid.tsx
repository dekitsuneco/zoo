import React, { ReactElement } from 'react';
import { Animal } from '../../types';
import { AnimalCage } from '../AnimalCage';
import style from './Grid.module.css';

interface GridProps {
  animals: Array<Animal>;
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
}

const Grid = ({ animals, setAnimals }: GridProps): ReactElement => {
  const handleUpgrade = (animalToUpgrade: Animal) => {
    setAnimals((prev) => {
      const filteredAnimals = prev.filter(
        (animal) => animal.id !== animalToUpgrade.id,
      );
      const upgradedAnimal = {
        ...animalToUpgrade,
        value: animalToUpgrade.value + 1,
      };

      return [...filteredAnimals, upgradedAnimal];
    });
  };

  const handleRemove = (id: number) => {
    setAnimals((prev) => prev.filter((animal) => animal.id !== id));
  };

  return (
    <div className={style['zoo']}>
      {animals &&
        animals
          .sort((a, b) => a.id - b.id)
          .map((animal) => (
            <AnimalCage
              key={animal.id}
              animal={animal}
              onUpgrade={handleUpgrade}
              onRemove={handleRemove}
            />
          ))}
    </div>
  );
};

export { Grid };
