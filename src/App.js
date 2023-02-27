import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/Navbar/ItemListContainer';



function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="mensaje"/>
    </div>
  )
}

export default App;
