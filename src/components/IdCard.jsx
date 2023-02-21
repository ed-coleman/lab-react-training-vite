import React from 'react'

export default function IdCard ({ lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className='IdCard'>
    {/* <img src={picture} alt='picture' /> */}
    <div>
        <h3>{lastName}</h3>
        <h3>{firstName}</h3>
        <h3>{gender}</h3>
        <h3>{height}</h3>
        <h3>{birth}</h3>
    </div>
    </div>
  )
}


