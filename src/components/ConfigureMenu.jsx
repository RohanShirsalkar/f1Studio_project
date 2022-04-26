import React, { useState } from 'react'
import downarrowicon from '../icons/downarrowicon.svg'
import ListItem from '../components/ListItem'
import { useContext } from 'react'
import { OrderDetailsContext } from '../components/context/OrderDetails'
import SelectOption from './SelectOption'

// third branch //

export default function ConfigureMenu(props) {


    const listItemsArr = props.menus.map(element => {
        return (
            <SelectOption data={element}/>
        )
    })

    return (

        <div>
            <div className=' d-flex dRow justify-content-between configureMenu'>
                <p>{props.title}</p>

                <select onChange={props.handleChange} name={props.menuName} id="dropdownSelect-2" class="form-select" aria-label="Default select example" style={{ width: "450px" }}>
                    <option selected >Select</option>
                    {listItemsArr}
                </select>
               
            </div>
        </div>
    )
}


