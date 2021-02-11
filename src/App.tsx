import React from 'react';
import './App.css';
import {TopPanel} from "./components/Top_panel/TopPanel";
import {headerData} from "./components/Header/HeaderData";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Products} from "./components/Products/Products";
import {BottomInfo} from "./components/BottomInfo/BottomInfo";
import {Form} from "./components/Form/Form";

function App() {
    return (
        <div className="App">
            <TopPanel/>
            <Header links={headerData}/>
            <Main/>
            <Products/>
            <BottomInfo/>
            <Form/>
        </div>
    );
}

export default App;
