import React from 'react';
import './deal.css'
function Deal(props) {
  return <div className='deal__container'>
      <div className="deal__wrapper">
          <div className="deal__text">
         <p>Super Deal Free shipping on order over $50</p>
          </div>
          <div className="close">
              <small onClick={() => props.close(false)}>close</small>
          </div>
      </div>
  </div>;
}

export default Deal;
