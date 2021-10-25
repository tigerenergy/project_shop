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
                    <td><button onClick={()=>{props.dispatch({type:'add'})}}> + </button></td>
                    <td><button onClick={()=>{props.dispatch({type:'remove'})}}> - </button></td>
                </tr>
            )
        })
    }
     
    </tbody>
  </Table>
</div>
    )
}

const userCart = (state) =>
{
    return {
        state: state
    }
}

export default connect(userCart)(Cart)