import React from 'react'
import { useState } from 'react'
import ListItem from '../components/ListItem'
import SelectOption from '../components/SelectOption'


export default function DropdownButton(props) {

    const value = ""
    // const [value, setValue] = useState(2)
    

        // const dropdown = document.getElementById('dropdownSelect')
        // dropdown.value = 6
    
    const listItemsArr = props.menus.map(element => {
        return (
            <SelectOption data={element}/>
        )
    })

    return (
        <select onChange={props.handleChange} value={!value ? 6 : value } id="dropdownSelect" class="form-select" aria-label="Default select example" style={{ width: "150px" }}>
            <option selected >{props.title}</option>
            {listItemsArr}
        </select>
    )
}
