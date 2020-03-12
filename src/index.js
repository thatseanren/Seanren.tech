import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';

import Section from "./Component/Section"
import Header from "./Component/header"
import LOWER_LEFT_NAVI from './Component/lower-left-navi';
import LOWER_RIGHT_ANIMATION from './Component/lower-right-animation';
import Background from './Component/background'
ReactDOM.render((<BrowserRouter>
    < Header />
    <Background />
    <switch>
        <Route exact path='/'>
            <div class="keyVisual">
                <div class="short-description">
                    <p class="description-content"></p>
                </div>
                <LOWER_LEFT_NAVI />
                <LOWER_RIGHT_ANIMATION/>
            </div>
        </Route>
        <Route path='/education'>
            <div style={{ height: "100vh", "padding-top": '30%' }}>
                <Section section='e-section' />
            </div>
        </Route>
        <Route path='/value'>
            <div style={{ height: "100vh", "padding-top": '30%' }}>
                <Section section='v-section' />
            </div>
        </Route>
        <Route path='/working'>
            <div style={{ height: "100vh", "padding-top": '30%' }}>
                <Section section='w-section' />
            </div>
        </Route>
        <Route path='/bio'>
            <div style={{ height: "100vh", "padding-top": '30%' }}>
                <Section section='bio-section' />
            </div>
        </Route>
        <Route path='/skill'>
            <div style={{ height: "100vh", "padding-top": '20%' }}>
                <Section section='e-section' />
            </div>
        </Route>
    </switch>
    <Section section='bio-section' />
    <Section section='e-section' />
    <Section section='w-section' />
    <Section section='v-section' />
</BrowserRouter>), document.getElementById('root'))
// ReactDOM.render(<Button />, document.getElementById('menu-btn'));
// ReactDOM.render(<Section section='bio-section' />, document.getElementById('bio-section'));
// ReactDOM.render(<Section section='e-section' />, document.getElementById('e-section'));
// ReactDOM.render(<Section section='w-section' />, document.getElementById('w-section'));
// ReactDOM.render(<Section section='v-section' />, document.getElementById('v-section'));
// ReactDOM.render(<BrowserRouter>
// //     <Route path='/432' component={Button}> </Route>
// // </BrowserRouter>, document.getElementById('menu-btn'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
