import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Nav }  from 'react-bootstrap'
import './Detail.css'
import {inventoryContext} from './App'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'

const Details = (props) =>
{ 
  useEffect(()=>
  {
    const time = setTimeout(()=>
    {
      alertChange(false)
    },1500)
    return ()=>
    {
      clearTimeout(time)
    }
  },
  [
  //  조건문 비어 있을 경우 한번만 실행 
  ])
  
  let [controllers, controllersChange] = useState(false)
  let [clickTab, clickTabChange] = useState(0)
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
         props.dispatch({type:'addItem', payload: {id: findIndex.id, name: findIndex.title, quan: 1}})
         history.push('/cart')

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

  <Nav className="mt-10" variant="tabs" defaultActiveKey="link-0">
  <Nav.Item>
    <Nav.Link href="link-0" onClick={()=>{controllersChange(false); clickTabChange(0)}}>상품설명</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>{controllersChange(false); clickTabChange(1)}}>배송정보</Nav.Link>
  </Nav.Item>
</Nav>
<CSSTransition in={controllers} classNames="wow" timeout={500}>
<TabContent clickTab={clickTab} controllersChange={controllersChange}></TabContent>
</CSSTransition>
</div> 
  )
}

const Inventory = (props) =>
{ 
  return(
    <p>재고: {props.inventory[0]}</p>
  )
}


const TabContent = (props) =>
{

 useEffect(()=>
 {
  props.controllersChange(true)
 })

 if(props.clickTab === 0)
 {
   return <div>0번째 내용 입니다</div>
 }
 if(props.clickTab === 1)
 {
   return <div>1번째 내용 입니다</div>
 }
 if(props.clickTab === 2)
 {
   return <div>2번째 내용 입니다</div>
 }
}




const userDetail = (state) =>
{
    return {
        state: state.reducer,
        alertOpen : state.alertReducer
    }
}

export default connect(userDetail)(Details)

