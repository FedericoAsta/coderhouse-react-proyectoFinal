import React from 'react';
import NavBar from './NavBar';

const Header = () => { // Acá podría hacer el fetch y mandarle el array directo al componente NavBAr
  return (
    <header>
        <NavBar />
    </header>
  )
}

export default Header;
