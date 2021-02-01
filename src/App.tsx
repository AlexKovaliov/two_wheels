import React from 'react';
import './App.css';
import {TopPanel} from "./components/Top_panel/TopPanel";
import {headerData} from "./components/Header/HeaderData";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";

function App() {
    return (
        <div className="App">
            <TopPanel/>
            <Header links={headerData}/>
            <Main/>
        </div>
    );
}

export default App;
