import React from 'react'
import { useState } from 'react'
import ListItem from '../components/ListItem'
import SelectOption from '../components/SelectOption'


export default function DropdownButton(props) {
    
    const listItemsArr = props.menus.map(element => {
        return (
            <SelectOption data={element}/>
        )
    })

    return (
        <select onChange={props.handleChange} id="dropdownSelect" class="form-select" aria-label="Default select example" style={{ width: "150px" }}>
            <option selected >{props.title}</option>
            {listItemsArr}
        </select>
    )
}
