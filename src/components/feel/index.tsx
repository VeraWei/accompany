import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

class Emoji extends React.Component {
    onClickHappy = () => {
        debugger;
    };

    onClickUpset = () => {};

    render() {
        return (
            <div className="emojis">
                <Link
                    className="feel-container"
                    to="/self-isolation-fun-front/joke"
                >
                    <div className="feel">
                        <div className="face-1">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>
                <Link
                    className="feel-container"
                    to="/self-isolation-fun-front/advice"
                >
                    <div className="feel" onClick={this.onClickUpset}>
                        <div className="face-2">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>

                <Link
                    className="feel-container"
                    to="/self-isolation-fun-front/dance"
                >
                    <div className="feel">
                        <div className="face-3">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>

                <Link
                    className="feel-container"
                    to="/self-isolation-fun-front/blood"
                >
                    <div className="feel" onClick={this.onClickUpset}>
                        <div className="face-4">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>

                <Link
                    className="feel-container"
                    to="/self-isolation-fun-front/read"
                >
                    <div className="feel" onClick={this.onClickUpset}>
                        <div className="face-5">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>

                <Link
                    className="feel-container"
                    to="/self-isolation-fun-front/wall"
                >
                    <div className="blue feel" onClick={this.onClickUpset}>
                        <div className="face-6">
                            <div className="eyes"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Emoji;