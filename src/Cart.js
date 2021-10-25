import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

const Cart = (props) =>
{
    return(
        <div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
      </tr>
    </thead>
    <tbody>
    {
        props.state.map((item , key) =>
        {
            return(
                <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quan}</td>
                    <button onClick={()=>{props.dispatch({type:'add'})}}>+</button>
                    <button onClick={()=>{props.dispatch({type:'remove'})}}>-</button>
                </tr>
            )
        })
    }
     
    </tbody>
        </Table>
        {
        props.alertOpen === true
        ? (<div className="alert">
            <p>지금 구매하시면 신규할인 20%</p>
            <button onClick={()=>{props.dispatch({type:'close'})}}>닫기</button>
            </div>)
        : null
        }
        </div>
            )
        }

        const userCart = (state) =>
        {
            return {
                state: state.reducer,
                alertOpen : state.alertReducer
            }
        }

        export default connect(userCart)(Cart)