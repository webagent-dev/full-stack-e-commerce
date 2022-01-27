import React from 'react';
import './category.css'
const cat = [1,2,3,4,5]
function Category() {
  return <div className='category__container'>
      <div className="category__wrapper">
    <div className="cat__content">
            <h2>   Long Shirt Wears</h2>
            <button className="cat__btn">Shop Now</button>
    </div>
      </div>
  </div>;
}

export default Category;
