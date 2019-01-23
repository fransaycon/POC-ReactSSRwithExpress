import React from 'react';
import { hydrate } from 'react-dom';
import styled from "styled-components";


const H1 = styled.h1`
    color: white;
    font-size: 4.5em;
    margin: 0;
    font-family: Arial;
`

const MainContainer = styled.div`
    align-items: center;
    background-color: #4274c4;
    display: flex;
    height: 100vh;
    justify-content: center;
`

const App = () => {
    return (
        <MainContainer>
            <H1>HELLO WORLD!</H1>
        </MainContainer>
    );
}

if(typeof document !== "undefined"){
    hydrate(<App />, document.getElementById("app"));
}

export default App;
