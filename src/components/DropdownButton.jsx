import React from 'react'
import downarrowicon from '../icons/downarrowicon.svg'
import { useState } from 'react'


export default function DropdownButton(props) {
    const [userSelectedMenu, setUserSelectedMenu] = useState("")

    const handleClick = (event) => {
        setUserSelectedMenu(event.target.text)
    }
    return (
        <div>
            <div class="dropdown">
                <button class="btn border configureMenuBtns" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px" }}>
                    {userSelectedMenu ? userSelectedMenu : props.title}
                </button><span className='dropdownIcon'><img src={downarrowicon} alt="" /></span>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ width: "150px" }} >
                    <li><a onClick={handleClick} class="dropdown-item" href="#">Action</a></li>
                    <li><a onClick={handleClick} class="dropdown-item" href="#">Another action</a></li>
                    <li><a onClick={handleClick} class="dropdown-item" href="#">Something else</a></li>
                </ul>
            </div>
        </div>
    )
}
