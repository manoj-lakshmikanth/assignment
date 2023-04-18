import React from 'react';
import Componentb from './Componentb';

const Componenta = () => {
  let cendol = 2;
  let color = true;
  return (
    <div>
      <Componentb data={cendol} color={color} />
    </div>
  );
};

export default Componenta;
