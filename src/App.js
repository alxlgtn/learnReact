// import logo from './logo.svg';
import "./App.css";
import React from "react";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';

import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Messenger/Messenger";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">                
                <Header state = {props.state.partHeader} />
                <Navbar state = {props.state.partNavbar}/>
                <Route path='/profile' render = { () => <Profile state = {props.state.pageProfile} /> }/>
                <Route path='/messenger' render = { () => <Dialogs state = {props.state.pageMessenger} /> }/>
                {/* <Route path='/news'     render={ () => <News/> }/> */}
                {/* <Route path='/music'    render={ () => <Music/> }/> */}
                {/* <Route path='/settings' render={ () => <Settings/> }/> */}
                {/* <Footer/> */}
            </div>
        </BrowserRouter>
    );
}

export default App;