// import logo from './logo.svg';
import "./App.css";
import React from "react";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';

import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialigs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <dev>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </dev>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;