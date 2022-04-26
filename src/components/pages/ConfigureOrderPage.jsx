import React from 'react'
import Navigation from '../Navigation'
import ConfigureMenu from '../ConfigureMenu'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export default function ConfigureOrderPage() {
    const menus = ["option-1", "option-2","option-3","option-4","option-5","option-6"]
    const category = ["Residential Door", "Office Door", "Garage Door", "Commercial Door"]
    const series = ["Canyon Ridge® Collection", "Classic Collection"]
    const doorTypes = ["CAN212", "CAN300", "CAN500"]
    return (
        <div>

            <Navigation title={"Configure a new door 1/3"} previousUrl={"/new_order"} />

            <div id="createOrderPage_2" className="container w-75 " style={{ position: "relative" }} >
                <div class="card w-100 pt-3" style={{ height: "100vh" }}>

                    <div id={"container"} class="pt-3 mx-auto" style={{ width: "70%" }}>

                        <ConfigureMenu title={"Select Category"} menus={category} />
                        <ConfigureMenu title={"Select Series"} menus={series} />
                        <ConfigureMenu title={"Door Type"} menus={doorTypes} />
                    </div>
                </div>

                <Footer btn1={"CONFIGURE"} url1={"/new_order/configure_order/add_details"} />
            </div>

        </div>
    )
}
