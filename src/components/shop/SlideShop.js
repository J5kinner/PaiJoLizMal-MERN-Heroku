/** @license 3120 Group X
 * Copyright (c) 3120 Group X, Inc. and its affiliates.
 *
 * Authors: @J5kinner
 *
 */

import React from "react";
import NoteEditor from "./NoteEditor.js";
import "../../assets/scss/components/Shop.scss";
import "../../assets/scss/components/Button.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
<<<<<<< HEAD
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
=======
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
>>>>>>> 2e1d450 (cleaning up a dirty merge)

const SlideShop = ({ user, setUserBalance }) => {

  return (
    <div className="shop">
<<<<<<< HEAD
      <div className="overlay">
      <div className="text">Please select your note</div>
      </div>
      
      <div>

        <AwesomeSlider className="slider">
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid red"
              editTitle="A wonderful Red note"
              type="red"
              user={user}
              price="10"
              setBalance={setUserBalance}
            />
          </div>
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid green"
              editTitle="A wonderful green note"
              type="green"
              user={user}
              price="20"
              setBalance={setUserBalance}
            />
          </div>
          <div>
            {" "}
            <NoteEditor
              noteColor="5px solid blue"
              editTitle="A wonderful blue note"
              type="blue"
              user={user}
              price="30"
              setBalance={setUserBalance}
            />
          </div>
        </AwesomeSlider>

=======
      <h3>Please select the note you would like to buy</h3>
      <p>Current Balance: {coins}</p>
      {/* <ShopApp /> */}
      <div>
      <AwesomeSlider >
        <div>
          {" "}
          <NoteEditor noteColor="5px solid red" editTitle="A wonderful Red note" />
        </div>
        <div>
          {" "}
          <NoteEditor noteColor="5px solid green" editTitle="A wonderful green note"/>
        </div>
        <div>
          {" "}
          <NoteEditor noteColor="5px solid blue"editTitle="A wonderful blue note" />
        </div>
      </AwesomeSlider>
>>>>>>> 73a4a35 (sliding animation)
      </div>
    </div>
  );
};

export default SlideShop;
