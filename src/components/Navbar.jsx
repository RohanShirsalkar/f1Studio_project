import React from 'react'
import bellicon from '../icons/bellicon.svg'
import listicon from '../icons/listicon.svg'
import questionicon from '../icons/questionicon.svg'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black  ">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4" href="#">f1Studioz</a>


                   
                        <div className=" d-flex justify-content-between ms-auto align-items-center" style={{ width: "230px" }}>
                            <img src={listicon} alt="error" width="20" height="20" className="rounded-circle" />
                            <img src={bellicon} alt="error" width="20" height="20" className="rounded-circle" />
                            <img src={questionicon} alt="error" width="20" height="20" className="rounded-circle" />
                            <img src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg" alt="error" width="35" height="35" className="rounded-circle" />
                        </div>
                 

                </div>
            </nav>
        </div>
    )
}
