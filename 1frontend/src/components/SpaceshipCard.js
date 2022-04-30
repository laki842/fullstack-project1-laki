import React from 'react';
import '../styles/componentStyles/SpaceshipCard.css';

function SpaceshipCard({ parts }) {
  return (
    <div className='spaceship-cards'>
      {parts.map((part) => {
        // Props destructuring and placing individual properties in their place
        const { id, name, manufacturer, price, image, state } = part;
        return (
          <div className={`spaceship-card`} key={id}>
            <h2 className='spaceship-title'>Name:{name}</h2>
            <h2 className='spaceship-manufacturer'>
              Manufacturer:{manufacturer}
            </h2>
            <img src={image} alt='picture' className='spaceship-img' />
            <h2 className='spaceship-state'>State:{state}</h2>
            <p className='spaceship-price'>Price:{price}$</p>
          </div>
        );
      })}
    </div>
  );
}

export default SpaceshipCard;
