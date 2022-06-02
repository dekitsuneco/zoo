import React, { ReactElement } from 'react';
import style from './AppButton.module.css';

interface AppButtonProps {
  title: string;
  onClick: () => void;
}

const AppButton = ({
  onClick: handleClick,
  title,
}: AppButtonProps): ReactElement => {
  return (
    <div className={style['wrapper']}>
      <button className={style['wrapper__btn']} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export { AppButton };
