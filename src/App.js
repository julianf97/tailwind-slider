import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { SeccionHarwarePrincipal } from './components/SeccionHardwarePrincipal/SeccionHardwarePrincipal'
import { SeccionHarwareSecundaria } from './components/SeccionHardwareSecundaria/SeccionHardwareSecundaria'



function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Slider/>
      <Routes>
        <Route path='*' element={<Navigate to={"/"}/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
      <SeccionHarwarePrincipal/>
      <SeccionHarwareSecundaria/>
    </BrowserRouter>
    </div>
  )
}

export default App;
