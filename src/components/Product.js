import React from 'react';

function Product({labelBag, imgBag, nameBag, priceBag}) {
    return (
        <>
           <article>
               <span>{labelBag}</span>
               <img src={imgBag} alt={nameBag}></img>
               <p>{nameBag}</p>
               <h4>{priceBag}</h4>
           </article>
        </>
    );
}

export default Product;