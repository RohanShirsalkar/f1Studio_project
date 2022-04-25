import React from 'react'
import { useState } from 'react'
import ListItem from '../components/ListItem'


export default function DropdownButton(props) {
    const [selectedOption,setSelectedOption] = useState()
    

    const handleClick = (event) => {
        // setUserSelectedMenu(event.target.text)
        console.log(event.target.value)
    }

    const handleChange = (event) => {
        console.log(typeof(event.target.value))
        setSelectedOption(event.target.value)
        console.log(selectedOption)
    }

    const listItemsArr = props.menus.map(element => {
        return (
            <ListItem handleClick={handleClick} data={element} />
        )
    })

    return (
        // <div id='dropDownBtns'>
        //     <div class="dropdown">
        //         <button class="btn border configureMenuBtns" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "150px" }}>
        //             {userSelectedMenu ? userSelectedMenu + " " + props.title : props.title}
        //         </button><span className='dropdownIcon'><img src={downarrowicon} alt="" /></span>
        //         <ul class="dropdown-menu" style={{ width: "150px" }} >
        //                 {listItemsArr}
        //         </ul>
        //     </div>
        // </div>

        <select onChange={handleChange} id="dropdownSelect" class="form-select" aria-label="Default select example" style={{ width: "150px" }}>
            <option selected >Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    )
}
