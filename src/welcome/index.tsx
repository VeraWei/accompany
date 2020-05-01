import React from 'react';
import './index.scss';
import Feel from '../feel';
//FIXME
import Desire from '../desire';

import "vex-js/dist/css/vex-theme-wireframe.css";
import "vex-js/dist/css/vex.css";

const vex = require('vex-js')
vex.registerPlugin(require('vex-dialog'));

// make sure load once.
let ISLOAD = false;
class Welcome extends React.Component {
    
    constructor(props: any) {
        super(props);
        if (!ISLOAD) {
            this.initAnimation();
        }
    }

    initAnimation() {
        vex.dialog.buttons.YES.text = '►';
        vex.dialog.alert({
            message: 'Holla, nice to meet you here. how are you?',
            className: 'vex-theme-wireframe',
            callback: (value: any) => {
                if (value) {
                    console.log('Successfully destroyed the planet1.')
                    // this.initFeel();
                } else {
                    console.log('Chicken1.')
                }
            }
        });
        ISLOAD = true;
    }

    render() {
        return <div className="App">
            <div className="words">
                <h1>Holla, nice to meet you here.</h1>
                <h3>how are you?</h3>
            </div>
            <Feel />
            <Desire />
        </div>
    }
}

export default Welcome;
