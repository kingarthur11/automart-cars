import './App.css';
import AddCars from './component/addCars';
import Banner from './component/banner';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AddCars />
    </div>
  );
}

export default App;
