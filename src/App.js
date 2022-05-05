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
import { useState } from 'react';
import { favorites } from './components/data/favoritesData';
import { tableData } from './components/data/TableData';
import { cart } from './components/data/cartData'

function App() {
  const [status, setStatus] = useState(false)

  const editFn = (event) => {
    let index = cart.findIndex(item => item.id == event.target.name)
    console.log("edit fn trigg")
  }


  return (
    <>
      <OrderDetailState >
        <Router>

          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage link={tableData} />} />
            <Route path="/favorites" element={<Homepage link={favorites} />} />
            <Route path="/new_order" element={<CreateorderPage />} />
            <Route path="/new_order/configure_order" element={<ConfigureOrderPage />} />
            <Route path="/new_order/configure_order/add_details" element={<OrderDetailsPage status={{ status, setStatus }} />} />
            <Route path="/new_order/configure_order/edit_order" element={<OrderDetailsPage status={{ status, setStatus }} />} />
            <Route path="/new_order/configure_order/add_details/cart" element={status ? <Cart /> : <Cart editFn={editFn} status={{ status, setStatus }} />} />
            {/* <Route path="/new_order/configure_order/add_details/cart" element={<Cart />} /> */}
          </Routes>

        </Router>
      </OrderDetailState>
    </>
  );
}

export default App;