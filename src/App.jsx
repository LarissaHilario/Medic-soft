import './App.css';
import Historial from './Pages/Historial';
import Register from './Pages/Register';
import AppRouter from './Router/AppRouter';
import Drawer from './components/Drawer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    <AppRouter/>
    </div>
  );
}

export default App;
