
import './App.css';
import React,{useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Cart from './screens/Cart/Cart';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      {/* NavBar */}
      <Navbar click={()=>{setSideToggle(true)}}/>
      {/* SideBar */}
      <SideDrawer show={sideToggle} click={()=>{setSideToggle(false)}}/>
      {/* BackDrop */}
      <Backdrop show={sideToggle} click={()=>{setSideToggle(false)}}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </main>

      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
