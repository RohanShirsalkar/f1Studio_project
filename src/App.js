import './App.css';
import Homepage from './components/pages/Homepage'
import Navbar from './components/Navbar'
import CreateorderPage from './components/pages/CreateorderPage';
import ConfigureOrderPage from './components/pages/ConfigureOrderPage';
import OrderDetailsPage from './components/pages/OrderDetailsPage';
import Cart from './components/pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { OrderDetailState } from './components/context/OrderDetails'
import { OrderDetailsContext } from './components/context/OrderDetails';
import { useContext } from 'react';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(false)
  // console.log(status)
  const pathName = window.location.pathname
  
  const orderDetailContext = useContext(OrderDetailsContext)
  // console.log(orderDetailContext.isFormReady)
  const orderStatus = true
  // console.log(orderDetailContext && orderStatus)

 


  return (
    <>
      <OrderDetailState >
        <Router>


          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/favorites" element={<Homepage />}/>
            <Route path="/new_order" element={<CreateorderPage />} />
            <Route path="/new_order/configure_order" element={<ConfigureOrderPage />} />
            <Route path="/new_order/configure_order/add_details" element={<OrderDetailsPage status={{status, setStatus}} />} />
            <Route path="/new_order/configure_order/add_details/cart" element={status ? <Cart /> : <OrderDetailsPage status={{status, setStatus}} />} />
            {/* <Route path="/new_order/configure_order/add_details/cart" element={<Cart />} /> */}
          </Routes>

        </Router>
      </OrderDetailState>
    </>
  );
}

export default App;