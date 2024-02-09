import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className='card'>
            <Link to={`/${props.id}`}>
                <img src={props.image} alt="" />
                <p className="price">Цена: {props.price}</p>
                <p className='title'>{props.title}</p>
                <p className='title'>{props.category}</p>
            </Link>
        </div>
    );
}

export default Card;
