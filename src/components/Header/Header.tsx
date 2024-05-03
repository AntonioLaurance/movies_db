import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className='header flex'>
        <div className='flex-none'>
            <h2 className='header-title'>Movies DB</h2>
        </div>
        <div className='flex menu-bar'>
            <div className='flex-none w-32 option'>
                <Link to={ROUTES.MY_FAVORITES}>MY FAVORITES</Link>
            </div>
            <div className='flex-none w-32 option'>
                <Link to={ROUTES.NOW_PLAYING}>NOW PLAYING</Link>
            </div>
            <div className='flex-none w-32 option'>
                <Link to={ROUTES.TOP_RATED}>TOP RATED</Link>
            </div>
            <div className='flex-none w-32 option'>
                <Link to={ROUTES.POPULAR}>POPULAR</Link>
            </div>
            <div className='flex-none w-32 option'>
                <Link to={ROUTES.HOME}>HOME</Link>
            </div>
        </div>
    </div>
  );
};

export default Header;
