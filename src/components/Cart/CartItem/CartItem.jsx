import React from 'react';
import { Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <div>
      <img src={item.media.source} alt="New York" style={{ width: '100%' }} class="w3-hover-opacity" />
      <div class="w3-container w3-white">
        <p><b>{item.name}</b></p>
        <p>{item.line_total.formatted_with_symbol}</p>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}><strong>-</strong></Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}><strong>+</strong></Button>
        </div>
        <Button style={{ float: 'right' }} variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default CartItem;
