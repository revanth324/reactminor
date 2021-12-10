import React from "react";
import Home from './Home';
import About from './About';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';
import './index.css'
import{BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
class App extends React.Component{
	render(){
	
		return(
		<>
		
		<BrowserRouter>
		<div class='box'>
		<NavLink activeClassName="active"  to="/">Home</NavLink>
		<NavLink to="/about">About</NavLink>
        <NavLink to="/products">Courses</NavLink>
		<NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
		</div>
		<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
		<Route path="/contact" element={<Contact/>}/>	
		</Routes>	
		</BrowserRouter>
		
		</>
		)
	}
}
	export default App;
