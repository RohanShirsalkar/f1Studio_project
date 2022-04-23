import React from 'react'
import Navigation from './Navigation'
import downarrowicon from '../icons/downarrowicon.svg'
import ConfigureMenu from './ConfigureMenu'

export default function ConfigureOrderPage() {
    return (
        <div>

            <Navigation title={"Configure a new door"} previousUrl={"/new_order"} />-

            <div className="container w-75 " style={{position: "relative    "}} >
                <div class="card w-100 pt-3" style={{ height: "100vh" }}>

                    <div class="card-body mx-auto" style={{ width: "70%" }}>

                        <ConfigureMenu title={"Select Category"} />
                        <ConfigureMenu title={"Select Series"} />
                        <ConfigureMenu title={"Door Type"} />
                    </div>
                </div>
            <div className='card  fixed-bottom py-3' style={{paddingRight: '13%'}}>
                <button className='btn btn-primary ms-auto' style={{width: "150px", backgroundColor:"#66332B"}}>CONFIGURE</button>
            </div>
            </div>

        </div>
    )
}
