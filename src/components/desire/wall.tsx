import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { HELPER_URL } from "../../util/url";
import { HTTP } from "../../util/http";
import Footer from "../../common/footer";
import Header from "../../common/header";
import "./index.scss";

const Particles = require("particlesjs");

const texts = ["abc", "wei", "jenifer", "jiaming", "hahah", "abc", "wei", "jenifer", "jiaming", "hahah", "jiaming", "hahah", "abc", "wei", "jenifer",];

class Wall extends React.Component {
    state = {
        content: null,
    };
    componentDidMount() {
        this.initBg();
    }

    initBg() {
        Particles.init({
            selector: ".wall-background",
            color: ["#DA0463", "#404B69"],
            connectParticles: true,
            responsive: [
                {
                    breakpoint: 1000,
                    options: {
                        color: "#00C9B1",
                        maxParticles: 80,
                        connectParticles: false,
                    },
                },
            ],
        });
    }

    // TODO animation
    renderHeader() {
        return <Header />;
    }

    renderFooter() {
        return <Footer />;
    }

    render() {
        const { content } = this.state;
        return (
            <div className="main">
                {this.renderHeader()}
                <canvas className="wall-background"></canvas>
                <div className="wall-contontent">
                    {texts.map((name, index)=>{
                        
                        const random = Math.floor(Math.random() * 4);
                        return <span className={`name name-${random}`}>{name}</span>;
                    })}
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}

export default Wall;
