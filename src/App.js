import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Restaurantlist from './Component/Restaurantlist';
import Viewrestaurant from './Component/Viewrestaurant';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header/>
        {/* <h2>Restaurant App</h2> */}
        <Routes>
          <Route path='/' element={<Restaurantlist/>} />
          <Route path='/Viewrestaurant/:id' element={<Viewrestaurant/>} />

        </Routes>
        
        <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
