import React from 'react'

export default function configureMenuLI(props) {
    return (
        <div>
            <li><a onClick={props.handleClick} name={props.fieldName} class="dropdown-item" href="#">{props.data}</a></li>
        </div>
    )
}
