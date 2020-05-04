import React from 'react';
import "vex-js/dist/css/vex-theme-wireframe.css";
import "vex-js/dist/css/vex.css";
import { HELPER_URL } from "../../util/url";
import  { HTTP } from "../../util/http";
import './index.scss';
//FIXME
import Feel from '../feel';
import Header from '../../common/header';
import Footer from '../../common/footer';


const vex = require('vex-js')
vex.registerPlugin(require('vex-dialog'));

// make sure load once.
let ISLOAD = false;
class Welcome extends React.Component {
    state = {
        name: "stranger",
    }

    componentDidMount() {
        const userName = localStorage.getItem('name');
        if (!ISLOAD && !userName) {
            // TODO
            this.initAnimation();
        }
        this.setState({
            name: userName,
        })
    }

    async sendUser(name: string) {
        const url = HELPER_URL['CREATEUSER'];
        const content = await HTTP.Post({url, data: {
            name
        }});
        console.log(content);
    }

    animationCallback = (data: {text: string}) => {
        if (!data.text) {
            return console.log('Cancelled')
        }
        localStorage.setItem('name', data.text);
        this.setState({
            name: data.text
        })
        
        this.sendUser(data.text);
    }

    initAnimation = () => {
        vex.dialog.buttons.YES.text = '►';
        vex.dialog.open({
            message: 'My Lord, I will show your name on the wall!',
            className: 'vex-theme-wireframe',
            input: [
                '<style>',
                    '.vex-custom-field-wrapper {',
                        'margin: 1em 0;',
                    '}',
                    '.vex-custom-field-wrapper > label {',
                        'display: inline-block;',
                        'margin-bottom: .2em;',
                    '}',
                '</style>',
                '<div class="vex-custom-field-wrapper">',
                    '<div class="vex-custom-input-wrapper">',
                        '<input name="text" type="text" />',
                    '</div>',
                '</div>',
            ].join(''),
            callback: this.animationCallback,
        });
        ISLOAD = true;
    }

    renderLoading() {
        return <div>...</div>
    }

    // TODO animation
    renderHeader() {
        return <Header />
    }

    renderFooter() {
        return <Footer />
    }

    render() {
        return <div className="App">
            {this.renderHeader()}
            <div className="main-contontent">
                <h2 style={{textAlign: 'center'}}>How are you?</h2>
                <Feel />
                { this.renderFooter() }
            </div>
        </div>
    }
}

export default Welcome;