import React from 'react'
import Navigation from '../Navigation'
import ConfigureMenu from '../ConfigureMenu'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

export default function ConfigureOrderPage() {
    return (
        <div>

            <Navigation title={"Configure a new door 1/3"} previousUrl={"/new_order"} />-

            <div className="container w-75 " style={{ position: "relative    " }} >
                <div class="card w-100 pt-3" style={{ height: "100vh" }}>

                    <div class="card-body mx-auto" style={{ width: "70%" }}>

                        <ConfigureMenu title={"Select Category"} />
                        <ConfigureMenu title={"Select Series"} />
                        <ConfigureMenu title={"Door Type"} />
                    </div>
                </div>

                <Footer btn1={"CONFIGURE"} url1={"/new_order/configure_order/add_details"} />
            </div>

        </div>
    )
}
