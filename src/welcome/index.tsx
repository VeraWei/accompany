import React from 'react';
import logo from './logo.svg';
import './index.scss';
import Feel from '../feel';
//FIXME
import Desire from '../desire';

class Welcome extends React.Component {
    render() {
        return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
            </header>
            <div>
                <p> How do you feel? </p>
                <Feel />
                <Desire />
            </div>
        </div>
        );
    }
}

export default Welcome;
