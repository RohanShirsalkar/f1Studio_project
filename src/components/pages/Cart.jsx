import React from 'react'
import Navigation from '../Navigation'

export default function Cart() {
    return (
        <div>
            <Navigation title={"Product name #Cart number"} previousUrl={"/new_order/configure_order/add_details"} />

            <div className="container w-75 mt-3">
                <div class="card">
                    <div class="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
        </div>
    )
}
