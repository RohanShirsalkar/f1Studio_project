import React from 'react'
import Navigation from '../Navigation'
import CreateOrderCard from '../CreateOrderCard'


export default function CreateorderPage() {


  return (
    <div>
      <Navigation title={"Create a new order"} previousUrl={"/"} />
      <div id='createOrderPage' className="container w-75">
        <CreateOrderCard class={"createOrderCard"} title={"Configure your door from scratch"} data={"Residential, Commerical, Entry doors"} route={"/new_order/configure_order"}/>
        <CreateOrderCard class={"createOrderCard"} title={"Parts / Openers"} data={"Order Parts and Openers"}/>
        <CreateOrderCard class={"createOrderCard"} title={"Direct Item Entry"} data={"Order Parts / Openers using a Product ID"}/>
        <CreateOrderCard class={"createOrderCard"} title={"Choose from favourites"} data={"Re-order door from your favourites "}/>
      </div>
    </div>
  )
}
