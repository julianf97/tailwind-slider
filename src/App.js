import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';
import { ItemListContainer } from './components/Navbar/ItemListContainer';



function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <Slider/>
    </div>
  )
}

export default App;
