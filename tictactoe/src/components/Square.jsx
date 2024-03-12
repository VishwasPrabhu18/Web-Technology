import React from 'react'

const Square = ({ value, pos, setValues }) => {

  const handleClick = (i) => {
    setValues(values => {
      const newValues = values.slice();
      newValues[i] = 'X';
      return newValues;
    });

  }

  return (
    <button onClick={() => handleClick(pos)} className='square'>{value}</button>
  )
}

export default Square