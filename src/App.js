import './App.css';
import CarRoutes from './carRoutes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './component/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <CarRoutes />
    </Router>
  );
}

export default App;
