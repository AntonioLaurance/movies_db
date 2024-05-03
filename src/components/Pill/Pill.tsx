import { IPill } from './types';
import classNames from 'classnames';
import React from 'react';
import './Pill.css';

const Pill: React.FC<IPill> = ({
    title,
    color,
}) => {
    const pillClass = classNames({
        "text-white text-xs font-normal leading-none my-0 mx-0 mb-1 p-1.5 table rounded": true,
        "bg-red-500": color === "red",
        "bg-yellow-500": color === "yellow",
        "bg-green-500": color === "green",
    });
    
    return (
        <p className={pillClass}> {title} </p>
    )    
}

export default Pill;
