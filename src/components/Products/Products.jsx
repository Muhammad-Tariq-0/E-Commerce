import React from 'react';
import Grid from '@material-ui/core/Grid';
import trust from '../../assets/trust.png'
import Product from './Product/Product';

const Products = ({ products, onAddToCart }) => {

  if (!products.length) return <p style={{color:'black'}}>Loading...</p>;

  return (
    <div>
      <br/>
      {/* -------------------Front Page Description--------------------------------------- */}
      <div className="w3-container w3-content w3-center w3-padding-64" style={{ maxWidth: '800px' }} id="band">
        <h2 className="w3-wide">MEGA BRAND</h2>
        <p className="w3-opacity"><i>People love Quality</i></p>
        <p className="w3-justify">To ensure delivery of advertising claims, companies must build quality into their products or services. From a production perspective, this means a companywide commitment to eliminate errors at every stage of the product development process—product design, process design, and manufacturing.
         It also means working closely with suppliers to eliminate defects from all incoming parts.
         We are Working Hard to provide Best quality products to our customers from many years,Every time we accept the customer suggestions and fullfill the Needs of customers.Thats why Mega Brand became the name of Quality.
         </p>
        <div className="w3-row w3-padding-32">
          <div className="w3-third">
            <br/>
            <strong>Do Transact</strong>
          </div>
          <div className="w3-third">
            <br/>
            <img src={trust} className="w3-round w3-margin-bottom" alt="Random Name" style={{ width: '60%' }} />
          </div>
          <div className="w3-third">
            <br/>
           <strong>With Trust</strong>
          </div>
        </div>
      </div>


{/* -------------------Product Page Calling--------------------------------------- */}
      <div class="w3-black">
        <div class="w3-container w3-content w3-padding-64" style={{ maxWidth: '1080px' }}>
          <h2 class="w3-wide w3-center">PRODUCTS</h2>
          <p class="w3-opacity w3-center"><i>Remember to give your valuable suggestions!</i></p><br />
          <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Products;

