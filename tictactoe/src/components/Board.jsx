import React, { useState } from 'react'
import Square from './Square';
import "../App.css";

const Board = () => {

  const [values, setValues] = useState(Array(9).fill(null));

  return ( 
    <>
      <div className="game-info">
        <span>Player : X</span>
      </div>
      <div className='board-row'>
        <Square setValues={setValues} pos="0" value={values[0]} />
        <Square setValues={setValues} pos="1" value={values[1]} />
        <Square setValues={setValues} pos="2" value={values[2]} />
      </div>
      <div className='board-row'>
        <Square setValues={setValues} pos="3" value={values[3]} />
        <Square setValues={setValues} pos="4" value={values[4]} />
        <Square setValues={setValues} pos="5" value={values[5]} />
      </div>
      <div className='board-row'>
        <Square setValues={setValues} pos="6" value={values[6]} />
        <Square setValues={setValues} pos="7" value={values[7]} />
        <Square setValues={setValues} pos="8" value={values[8]} />
      </div>
    </>
  )
}

export default Board