import { createContext, useState } from "react";

const OrderDetailsContext = createContext()

const OrderDetailState = (props) => {

    const [orderData, setOrderData] = useState("Working")
    const [isFormReady, setIsFromReady] = useState(false)
    console.log(isFormReady)



    return(
        <OrderDetailsContext.Provider value={{orderData, setOrderData, isFormReady, setIsFromReady }}>
            {props.children}
        </OrderDetailsContext.Provider>
    )

}

export {OrderDetailState, OrderDetailsContext};