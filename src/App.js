import './App.css';
import AddCars from './component/addCars';
import ListCars from './component/listCars';
import Banner from './component/banner';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ListCars />
    </div>
  );
}

export default App;
