
import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NavbarExample from './layouts/Navbar'
import Menu from './components/Menu.jsx'
import FormularioList from './components/FormularioList.jsx'
import NewInforme from './components/NewInforme'
import Registrate from './components/Registrate'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<NavbarExample/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path="informes" element={<FormularioList/>} />
          <Route path="newinforme" element={<NewInforme/>} />
          <Route path="registrate" element={<Registrate/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
