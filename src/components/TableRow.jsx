import React from 'react'



export default function TableRow(props) {
  const today = new Date().toLocaleDateString()

  return (  
    <tr>
      <td>{props.productInfo}</td>
      <td>{props.cartName}</td>
      <td>{props.shippingPoint}</td>
      <td>{props.createdBy}</td>
      <td>{props.expiry}{props.date == today && <span className="ms-3 badge rounded-pill bg-success" style={{position: "absolute",right: "5rem"}}>NEW</span>}</td>
    </tr>
  )
}
