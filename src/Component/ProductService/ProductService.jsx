import React from 'react';
import './ProductService.css';

const ProductService = ({icon,title}) => {
  return (
       <div className="service">
          <i class={icon}></i>
          <h5>{title}</h5>
        </div>
  )
}

export default ProductService;
