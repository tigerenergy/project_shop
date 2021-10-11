import React, { useState } from 'react'


const Card = (props) =>
{
  return(
        <div className="col-md-4">
          <img src={props.guitar.src} height="70%" alt="팬더기타" />
          <h4>{props.guitar.title}</h4>
          <p>{props.guitar.content}</p>
          <p><strong>{props.guitar.price}</strong></p>
        </div>
  )
}

export default Card