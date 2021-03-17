import React from 'react';
import {  Typography } from '@material-ui/core';

const Product = ({ product, onAddToCart }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div>
    <div>
    <img src={product.media.source} alt="loading" style={{width:'100%'}} class="w3-hover-opacity"/>
    <div class="w3-container w3-white">
      <p><b>{product.name}</b></p>
      <p class="w3-opacity">${product.price.formatted}</p>
      <p> <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" /></p>
      <button class="w3-button w3-black w3-margin-bottom" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
    </div>
  );
};

export default Product;

