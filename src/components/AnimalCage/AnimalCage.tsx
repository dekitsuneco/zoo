import React, { ReactElement } from 'react';
import { Animal } from '../../types';
import { AppButton } from '../AppButton';
import style from './AnimalCage.module.css';

interface AnimalCageProps {
  animal: Animal;
  onUpgrade: (animalTypes: Animal) => void;
  onRemove: (id: number) => void;
}

const AnimalCage = ({
  animal,
  onUpgrade: handleUpgradeClick,
  onRemove: handleRemoveClick,
}: AnimalCageProps): ReactElement => {
  return (
    <div className={style['animal']}>
      <p className={style['animal__type']}>{animal.type}</p>
      <p className={style['animal__trait']}>
        {animal.trait} - {animal.value}
      </p>
      <div className='animal__panel'>
        <AppButton onClick={() => handleUpgradeClick(animal)} title={'Feed'} />
        <AppButton
          onClick={() => handleRemoveClick(animal.id)}
          title={'Free'}
        />
      </div>
    </div>
  );
};

export { AnimalCage };
