import React from 'react';
import './App.css';
import {TopPanel} from "./components/Top_panel/TopPanel";
import {headerData} from "./components/Header/HeaderData";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <TopPanel/>
            <Header links={headerData}/>
        </div>
    );
}

export default App;
