import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Brand: React.FC = () => {
  const navigate = useNavigate();

  const handleBrandClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    navigate(`/pages/select-brand/${e.currentTarget.innerText}`);
    console.log(e.currentTarget.innerText);
  };

  return (
    <div>
      <div className='container mx-auto'>
        <p onClick={handleBrandClick}>Samsung</p>
        <p>Redmi</p>
      </div>
      <Outlet/>
    </div>
  );
};

export default Brand;
