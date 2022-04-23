import React from 'react'

export default function TableRow(props) {
  return (  
    <tr>
      <td>{props.productInfo}</td>
      <td>{props.cartName}</td>
      <td>{props.shippingPoint}</td>
      <td>{props.createdBy}</td>
      <td>{props.expiry}</td>
    </tr>
  )
}
