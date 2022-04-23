import './App.css';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateorderPage from './components/CreateorderPage';
import ConfigureOrderPage from './components/ConfigureOrderPage';

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new_order" element={<CreateorderPage />} />
        <Route path="/new_order/configure_order" element={<ConfigureOrderPage />} />
      </Routes>

    </Router>
  );
}

export default App;