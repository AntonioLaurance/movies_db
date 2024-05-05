import { IButton } from './types';
import './Buttom.css';
import React from 'react';

const Button: React.FC<IButton> = ({text, onClick}) => {
    return (
        <button className="view-all-botton" onClick={onClick}>{text}</button>
    )
};

export default Button;
