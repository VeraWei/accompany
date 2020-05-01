import React from 'react';
import './index.scss';

class Emoji extends React.Component {

    onClickHappy = () => {
    }

    onClickUpset = () => {

    }

    render() {
        return (
          <ul className="emojis">
            <li onClick={this.onClickHappy}>
                <div className="face-1">
                    <div className="eyes"></div>
                    <div className="mouth"></div>
                </div>
            </li>
            <li onClick={this.onClickUpset}>
                <div className="face-2">
                <div className="eyes"></div>
                <div className="mouth"></div>
                </div>
            </li>
            <li>
                <div className="face-3">
                <div className="eyes"></div>
                <div className="mouth"></div>
                </div>
            </li>
            <li onClick={this.onClickUpset}>
                <div className="face-4">
                <div className="eyes"></div>
                <div className="mouth"></div>
                </div>
            </li>
            <li onClick={this.onClickUpset}>
                <div className="face-5">
                <div className="eyes"></div>
                <div className="mouth"></div>
                </div>
            </li>
            <li className="blue" onClick={this.onClickUpset}>
                <div className="face-6">
                <div className="eyes"></div>
                <div className="mouth"></div>
                </div>
            </li>
          </ul>
        );
    }
}

export default Emoji;
