import React, { useEffect } from 'react'
import TableRow from '../components/TableRow'
import TableDataCard from '../components/TableDataCard'


export default function Table(props) {

    const today = new Date().toLocaleDateString()

    
    const tableRowArray = props.data.map(element => {
        return (
            <TableRow productInfo={element.assemblyType ? element.assemblyType : "NA"} cartName={element.color ? element.color : "NA"} shippingPoint={element.design? element.design : "NA" } createdBy={element.trackRadius ? element.trackRadius : "NA"} expiry={element.section ? element.section : "NA"} date={element.date} />
        )
    })

    const cardsArray = props.data.map(element => {
        return(
            <TableDataCard date={element.date} section={element.section ? element.section : "NA"} farming={element.farming ? element.farming : "NA"} assemblyType={element.assemblyType ? element.assemblyType : "NA"} color={element.color ? element.color : "NA"} glassType={element.glassType ? element.glassType : "NA"} design={element.design ? element.design : "NA"} />
        )
    })

    let arrayLength = tableRowArray.length

    return (
        <div>
            {arrayLength == 0 ? 

            <div className='d-flex justify-content-center align-items-center' style={{height : "70vh"}}><h5>NO DATA</h5></div>
            
            :

                <div>
                    <table id="homepageTable" className="table table-striped table-borderless shadow">
                        <thead className='text-secondary' style={{ fontSize: "12px" }}>
                            <tr>
                                <th scope="col">ASSEMBLY TYPE</th>
                                <th scope="col">COLOR</th>
                                <th scope="col">DESIGN</th>
                                <th scope="col">TRACK RADIUS</th>
                                <th scope="col">SECTION</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: "15px" }}>
                            {tableRowArray.reverse()}
                        </tbody>
                    </table>

                    {/* Mobile Cards */}

                    <div id="homepageCards" >
                        {cardsArray.reverse()}

                    </div>
                </div>
            }
        </div>
    )
}
