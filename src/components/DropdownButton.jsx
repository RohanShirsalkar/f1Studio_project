import React from 'react'
import downarrowicon from '../icons/downarrowicon.svg'
import { useState } from 'react'
import ListItem from '../components/ListItem'


export default function DropdownButton(props) {
    const [userSelectedMenu, setUserSelectedMenu] = useState("")

    const handleClick = (event) => {
        setUserSelectedMenu(event.target.text)
    }

    const listItemsArr = props.menus.map(element => {
        return (
            <ListItem handleClick={handleClick} data={element} />
        )
    })

    return (
        <div id='dropDownBtns'>
            <div class="dropdown">
                <button class="btn border configureMenuBtns" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px" }}>
                    {userSelectedMenu ? userSelectedMenu + " " + props.title : props.title}
                </button><span className='dropdownIcon'><img src={downarrowicon} alt="" /></span>
                <ul class="dropdown-menu" style={{ width: "150px" }} >
                        {listItemsArr}
                </ul>
            </div>
        </div>
    )
}
