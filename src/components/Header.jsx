import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Container } from '.';

const Header = () => {
  return (
    <header className="py-5">
      <Container>
        <div className="flex items-center justify-between gap-4 ">
          <h1 className="text-2xl font-semibold">Ambros Coffee Roasters</h1>
          <span>
            <HiOutlineShoppingBag size={24} className="text-primary-300" />
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
