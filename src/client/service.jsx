import React, {useState} from "react";
import {Products} from "./Products"


export const Service = () => {


    return(
        <div className="productContainer">
        {Products.map((product) => (
            <div key={product.id} className={product.css}>
            <img key={product.id} src={product.image} className={product.imageCss} alt={product.title}  />
            <h3 key={product.id} className={product.textCss}>{product.title}</h3>
            </div>
        ))}

    </div>
)
};

