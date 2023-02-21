import React from 'react'



export default function Random({min, max}) {
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

  return (
    <div>
    <h3>Random value between {min} and {max} = {Math.floor(getRandom(min, max))}</h3>
    </div>
  )
}
