// import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import Footer from './component/Footer';

const App = () => {
    return (
        <div className="app-wrapper">

            <Header />
            <Navbar />
            <Profile />
            <Footer />

        </div>
    );
}

export default App;