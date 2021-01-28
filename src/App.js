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

import {BrowserRouter} from "react-router-dom"
import {Route} from "react-router-dom"

// Header Data
// let headerLogoData = [
//     {
//         logoHeader: 'ReactApp',
//         imageLink: 'https://s.svgbox.net/files.svg?ic=reactjs',
//         imageAltText: 'logo img alt text'
//     },
// ]

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">                
                <Header 
                    state={props.state.partHeader} 
                />

                <Navbar
                    state={props.state.partNavbar}
                />
                <Route path='/profile'  render={ () => <Profile
                    state={props.state.pageProfile}
                    // galeryData={props.appState.galeryData}
                    // aboutData={props.appState.aboutData}
                    // submitPostData={props.appState.submitPostData}
                    // postsData={props.appState.postsData}
                /> }/>
                <Route path='/dialogs'  render={ () => <Dialogs 
                    state={props.state.pageMessages} 
                    // DialogsData={props.appState.DialogsData} 
                    // MessagesData={props.MessagesData}
                />}/>
                {/* <Route path='/news'     render={ () => <News/> }/> */}
                {/* <Route path='/music'    render={ () => <Music/> }/> */}
                {/* <Route path='/settings' render={ () => <Settings/> }/> */}
                {/* <Footer/> */}
            </div>
        </BrowserRouter>
    );
}

export default App;