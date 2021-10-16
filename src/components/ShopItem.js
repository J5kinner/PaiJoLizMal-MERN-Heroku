/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React from "react";
import Note from "./Note.js";
import "../assets/scss/components/Shop.scss";


const ShopItem = (props) => {
  return (
    <div className="shop-item-area">
      <Note color={props.color} />
      <div className="shop-item-area desc">
        <p>Description:{props.title}</p>
        <br />
        <p>Cost: ${props.cost}</p>
      </div>
      
    </div>
  );
};

export default ShopItem;