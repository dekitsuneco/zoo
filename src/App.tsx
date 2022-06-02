import React, { ReactElement } from 'react';
import { AppButton } from './components/AppButton';
import { Grid } from './components/Grid';
import { useAnimals } from './hooks/useAnimals';

function App(): ReactElement {
  const [caughtAnimals, setCaughtAnimals, catchNewAnimal] = useAnimals();

  const handleClick = () => {
    catchNewAnimal();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      <AppButton onClick={handleClick} title={'Catch'} />

      <Grid animals={caughtAnimals} setAnimals={setCaughtAnimals} />
    </div>
  );
}

export default App;
