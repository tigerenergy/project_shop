import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const Details = (props) =>
{ 
  let { id } = useParams()
  let history = useHistory()
  let findIndex = props.guitar.find((item)=>{
    return item.id == id
  })

  return(
  <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src={findIndex.src} width="45%" />
    </div>
    <div className="col-md-6 mt-4">
      <h4 className="pt-5">{findIndex.title}</h4>
      <p>{findIndex.content}</p>
      <p>{findIndex.price}</p>
      <button className="btn btn-danger">주문하기</button> 
      <button className="btn btn-primary" onClick={()=>{history.push('/')}}>뒤로가기</button> 
      <div className="my-alert">
        <div className="p">재고가 얼마 남지 않았습니다.</div>
      </div>
    </div>
  </div>
</div> 
  )
}

export default Details