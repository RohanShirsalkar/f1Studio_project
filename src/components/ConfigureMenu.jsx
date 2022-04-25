import React, { useState } from 'react'
import downarrowicon from '../icons/downarrowicon.svg'
import ListItem from '../components/ListItem'
import { useContext } from 'react'
import { OrderDetailsContext } from '../components/context/OrderDetails'

// third branch //

export default function ConfigureMenu(props) {
    
    const [userSelectedMenu, setUserSelectedMenu] = useState("")
    const orderData = useContext(OrderDetailsContext)

    let isFilled = false
    if (userSelectedMenu) {
        isFilled = true
    } 
    else {
        isFilled = false
    }

    const handleClick = (event) => {
        setUserSelectedMenu(event.target.text)
        orderData.setOrderData(event.target.text)
    }


    const listItemsArr = props.menus.map(element => {
        return (
            <ListItem handleClick={ props.handleClick ? props.handleClick : handleClick} fieldName={props.fieldName} data={element} />
        )
    })

    return (

        <div>
            <div className=' d-flex dRow justify-content-between configureMenu'>
                <p>{props.title}</p>

                <div class="dropdown ">
                    <button class="btn border configureMenuBtns" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                        {props.menuName ? props.menuName : "Select"}
                        {/* {userSelectedMenu ? userSelectedMenu : "Select"} */}
                    </button><span className='dropdownIcon'><img src={downarrowicon} alt="" /></span>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                        {listItemsArr}
                    </ul>
                </div>
            </div>
        </div>
    )
}
