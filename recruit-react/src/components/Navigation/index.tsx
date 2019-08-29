import React, { useState } from 'react';

import './navigation.css';

const Navigation: React.FC = props => {
  const [isOpened, toggleOpened] = useState<Boolean>(false);

  const handleClick = () => {
    toggleOpened(!isOpened);
  };

  return (
    <nav className={isOpened ? 'opened' : ''}>
      <div className="container">
        <div className={'navIcon'} onClick={handleClick}>Button{`${isOpened}`}</div>
      </div>
    </nav>
  );
};

export default Navigation;
