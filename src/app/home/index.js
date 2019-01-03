import React from 'react';
import { hydrate } from 'react-dom';
import App from './app';

export default ()=> {
    if(typeof document !== "undefined"){
        return hydrate(<App />, document.getElementById("app"));
    }
    else{
        return <App />;
    }
}
