import React from 'react'
import leftarrowicon from '../icons/leftarrowicon.svg'
import threedotsicon from '../icons/threedotsicon.svg'
import {Link} from 'react-router-dom'

export default function Navigation(props) {
  return (
    <div>
      <div id='navigationComponent' className="w-100 d-flex py-2 px-3 justify-content-between">
        <div className="left">
          <Link to={props.previousUrl}><img src={leftarrowicon} alt="err" /></Link><span className='text-white ms-4'>{props.title}</span>
        </div>

        <div className="right">
          <button style={{background : "none", border:'none'}}><img src={threedotsicon} alt="" /></button>
        </div>
      </div>


    </div>
  )
}
