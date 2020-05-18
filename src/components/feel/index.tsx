import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

class Emoji extends React.Component {
    render() {
        return (
            <div className="emojis">
                <Link to="/game" className="feel-container">
                    <span>Game</span>
                    <div className="feel">
                        <div className="face-1">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>
                <Link to="/recommend" className="feel-container">
                    <span>Recommendation</span>
                    <div className="feel">
                        <div className="face-2">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>
                <Link to="/dance" className="feel-container">
                    <span>Dance</span>
                    <div className="feel">
                        <div className="face-5">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>
                <Link to="/user" className="feel-container">
                    <span>User</span>
                    <div className="blue feel">
                        <div className="face-6">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>
                {/* 
                <li className="feel-container">
                    <Link
                        to="/dance"
                    >
                        <div className="feel">
                            <div className="face-3">
                                <div className="eyes"></div>
                                <div className="mouth"></div>
                            </div>
                        </div>
                    </Link>
                </li>

                <li className="feel-container">
                    <Link
                        to="/blood"
                    >
                        <div className="feel">
                            <div className="face-4">
                                <div className="eyes"></div>
                                <div className="mouth"></div>
                            </div>
                        </div>
                    </Link> 
                    </li>*/}
            </div>
        );
    }
}

export default Emoji;
