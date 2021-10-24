import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './Detail.css'
import {inventoryContext} from './App'
const Details = (props) =>
{ 
  useEffect(()=>
  {
    const time = setTimeout(()=>
    {
      alertChange(false)
    },2000)
    return ()=>
    {
      clearTimeout(time)
    }
  },
  [
  //  조건문 비어 있을 경우 한번만 실행 
  ])

  let inventory = useContext(inventoryContext)
  let [alert, alertChange] = useState(true)
  let [inputData, inputDataChange] = useState()
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
      <Inventory inventory={props.inventory}></Inventory>
      <button className="btn btn-danger" onClick={()=>
        {
          props.inventoryChange([9,11,12])
        }}>주문하기</button> 
      <button className="btn btn-primary" onClick={()=>{history.push('/')}}>뒤로가기</button>
      {
        alert === true
        ?(<div className="alert">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>)
        : null
      }
    </div>
  </div>
</div> 
  )
}

const Inventory = (props) =>
{ 
  return(
    <p>재고: {props.inventory[0]}</p>
  )
}

export default Details