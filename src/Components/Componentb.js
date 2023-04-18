import React, { useState } from 'react';
import '../App.css';

const Componentb = (props) => {
  let count = props.data;
  let check = props.color;
  const [value, setValue] = useState(count);
  const [color, setColor] = useState(check);
  return (
    <div className="container">
      <div className="square">
        <div className="circle">
          <div>{value}</div>
          <button
            className="btn"
            onClick={() => {
              setValue(value + 10);
            }}
          >
            Click to increase counter
          </button>
        </div>
      </div>
      <button
        className={color ? 'redbtn' : 'bluebtn'}
        onClick={() => {
          setColor(!color);
        }}
      >
        Change color
      </button>
    </div>
  );
};

export default Componentb;
