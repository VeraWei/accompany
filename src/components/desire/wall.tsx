import React from "react";
import { HELPER_URL } from "../../util/url";
import { HTTP } from "../../util/http";
import Footer from "../../common/footer";
import Header from "../../common/header";
import "./index.scss";

// Test data;
const texts = [
    {
        feel: 0,
        name: "Arezoo Ariafar",
    }, {
        feel: 1,
        name: "Gilbert Tsui",
    }, {
        feel: 2,
        name: "Noman Saleem",
    }, {
        feel: 3,
        name: "Victor Choong",
    }, {
        feel: 4,
        name: "Mohammad Ghaeli",
    }, {
        feel: 0,
        name: "Bambang Sarif",
    }, {
        feel: 0,
        name: "Mohammad Ghaeli",
    }, {
        feel: 0,
        name: "Yanyi Li",
    }, {
        feel: 0,
        name: "Lucia Lu",
    }, {
        feel: 0,
        name: "Emily Ho",
    }, {
        feel: 0,
        name: "Trevor Nova",
    }, {
        feel: 0,
        name: "Pam Hong",
    }, {
        feel: 0,
        name: "Sohee",
    }, {
        feel: 0,
        name: "Amanda Zohe",
    }, {
        feel: 0,
        name: "Tylor Swift",
    }
];

class Wall extends React.Component {
    state = {
        content: [],
    };
    componentDidMount() {
        this.getData();
    }

    async getData() {
        const url = HELPER_URL["USERS"];
        const content = await HTTP.Get({ url });
        this.setState({
            content: content.users.concat(texts) || texts,
        });
    }

    renderHeader() {
        return <Header />;
    }

    renderPlaceholder() {
        return <p>No user yet</p>;
    }

    renderAnimation() {
        const { content } = this.state;
        return content.map((item: any, index) => {
            const random = Math.floor(Math.random() * 5);
            const { name, feel } = item;
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            
            return (
                <span
                    key={`user-${index}`}
                    className={`name name-${random} feel feel-${feel}`}
                    style={{color: `#${randomColor}`}}
                >
                    {name}
                </span>
            )}
        );
    }

    renderFooter() {
        return <Footer  hasBack={true} />;
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
