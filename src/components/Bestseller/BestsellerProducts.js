import React from 'react';
import BestsellerSingleProduct from './BestsellerSingleProduct';
import GloboHebes from './../../images/GloboHebes.png';
import bezChair from './../../images/bezChair.png';
import yellowChair from './../../images/yellowChair.png';
import woodenChair from './../../images/woodenChair.png';
import blackChair from './../../images/blackChair.png';
import seater from './../../images/seater.png';
import stools from './../../images/Stools.png';
import prChair from './../../images/prChair.png';

const BestsellerProducts = () => {
  return (
    <div className="bestseller-products">
      <BestsellerSingleProduct
        prodImage={GloboHebes}
        prodName="Petite Table Lamp"
        prodPrice="$19.00"
        span="$21.00"
      />
      <BestsellerSingleProduct
        prodImage={bezChair}
        prodName="Madra Log Holder"
        prodPrice="$191.00"
        span="$221.00"
      />
      <BestsellerSingleProduct
        prodImage={yellowChair}
        prodName="Garden Armchair"
        prodPrice="$11.00"
      />
      <BestsellerSingleProduct
        prodImage={woodenChair}
        prodName="Original Outdoor Beanbag"
        prodPrice="$50.00"
        span="$71.00"
      />
      <BestsellerSingleProduct
        prodImage={blackChair}
        prodName="Carronade Large Suspension Lamp"
        prodPrice="$19.00"
      />
      <BestsellerSingleProduct
        prodImage={seater}
        prodName="2-Seater"
        prodPrice="$165.00"
      />
      <BestsellerSingleProduct
        prodImage={stools}
        prodName="Wingback Chair"
        prodPrice="$119.00"
        span="$221.00"
      />
      <BestsellerSingleProduct
        prodImage={prChair}
        prodName="Cushion Set 3 Pieces"
        prodPrice="$91.00"
      />
      <BestsellerSingleProduct
        prodImage={GloboHebes}
        prodName="Petite Table Lamp"
        prodPrice="$91.00"
      />
    </div>
  );
};

export default BestsellerProducts;
