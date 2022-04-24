import { createContext, useState } from "react";

const OrderDetailsContext = createContext()

const OrderDetailState = (props) => {

    const [orderData, setOrderData] = useState("Working")

    return(
        <OrderDetailsContext.Provider value={{orderData, setOrderData}}>
            {props.children}
        </OrderDetailsContext.Provider>
    )

}

export {OrderDetailState, OrderDetailsContext};