import React from 'react';
import Color from './Color';
import { useState } from 'react';

const Menu = () => {
  const [old_color, setColor] = useState("");

  // const useColor = (new_color) => {
  //   setColor(new_color);
  //   // return <Color color={old_color}></Color>
  //   // return <button></button>
  // }

  return (
    <div className="colorOptions">
      <button>Post blue</button>
      <button onClick={() => { setColor('red'); }}>Post blue</button>
      <p>{old_color + "3"}</p>
      {/* <Color handleClick={() => console.log('hi')} color={old_color}></Color> */}
    </div >
  );
}

export default Menu;