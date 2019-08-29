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
        <div className={'navIcon'} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navTitle">{!isOpened ? 'Register card form' : 'Menu'}</div>
        <ul className="navList">
          <li>This is menu content</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
