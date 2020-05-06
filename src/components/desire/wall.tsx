import React from "react";
import { HELPER_URL } from "../../util/url";
import { HTTP } from "../../util/http";
import Footer from "../../common/footer";
import Header from "../../common/header";
import "./index.scss";

const Particles = require("particlesjs");

// Test data;
const texts = [
    {
        name: "abc",
    }, {
        name: "wei",
    }, {
        name: "jenifer",
    }, {
        name: "jiaming",
    }, {
        name: "hahah",
    }, {
        name: "abc",
    }, {
        name: "wei",
    }, {
        name: "jenifer",
    }, {
        name: "jiaming",
    }, {
        name: "hahah",
    }, {
        name: "jiaming",
    }, {
        name: "hahah",
    }, {
        name: "abc",
    }, {
        name: "wei",
    }, {
        name: "jenifer",
    }
];

class Wall extends React.Component {
    state = {
        content: [],
    };
    componentDidMount() {
        this.initBg();
        this.getData();
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

    async getData() {
        const url = HELPER_URL["USERS"];
        const content = await HTTP.Get({ url });
        const users = content.users;
        this.setState({
            content: content.users || texts,
        });
    }

    // TODO animation
    renderHeader() {
        return <Header />;
    }

    renderPlaceholder() {
        return <p>No user yet</p>;
    }

    renderAnimation() {
        const { content } = this.state;
        return content.map((item: any, index) => {
            const random = Math.floor(Math.random() * 4);
            const { name } = item;
            return (
                <span key={`user-${index}`} className={`name name-${random}`}>
                    {name}
                </span>
            )}
        );
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
                    {!content.length
                        ? this.renderPlaceholder()
                        : this.renderAnimation()}
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}

export default Wall;
