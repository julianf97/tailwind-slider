import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';
import { ItemListContainer } from './components/Navbar/ItemListContainer'
import { SeccionHarwarePrincipal } from './components/SeccionHardwarePrincipal/SeccionHardwarePrincipal'
import { SeccionHarwareSecundaria } from './components/SeccionHardwareSecundaria/SeccionHardwareSecundaria'



function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <Slider/>
      <SeccionHarwarePrincipal/>
      <SeccionHarwareSecundaria/>
    </div>
  )
}

export default App;
