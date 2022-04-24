import React, { useState } from 'react'
import downarrowicon from '../icons/downarrowicon.svg'


export default function ConfigureMenu(props) {

    const [userSelectedMenu, setUserSelectedMenu] = useState("")
    const handleClick = (event) => {
        setUserSelectedMenu(event.target.text)
    }

    return (
        <div>
            <div className=' d-flex justify-content-between configureMenu'>
                <p>{props.title}</p>

                <div class="dropdown ">
                    <button class="btn border configureMenuBtns" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                        {userSelectedMenu ? userSelectedMenu : "Select"}
                    </button><span className='dropdownIcon'><img src={downarrowicon} alt="" /></span>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                        <li><a onClick={handleClick} class="dropdown-item" href="#">Action</a></li>
                        <li><a onClick={handleClick} class="dropdown-item" href="#">Another action</a></li>
                        <li><a onClick={handleClick} class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
