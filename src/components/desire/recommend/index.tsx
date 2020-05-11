import React from "react";
import {Spinner, Button} from "react-bootstrap";
import { HELPER_URL } from "../../../util/url";
import { HTTP } from "../../../util/http";
import Footer from "../../../common/footer";
import Header from "../../../common/header";
import "./index.scss";

class Recommend extends React.Component {
    state = {
        content: [],
    };
    componentDidMount() {
        this.getData();
    }

    async getData() {
        const url = HELPER_URL["RecommendPoem"];
        const content = await HTTP.Get({ url });
        console.log(content);
        this.setState({
            content,
        });
    }

    // TODO animation
    renderHeader() {
        return <Header />;
    }

    renderPoem() {
        const { content } = this.state;
        return content.length ? (
            <ul>
                {content.map((item: any, index: number) => {
                    return (
                        <li key={`poem-${index}`}>
                            <p>{item.title}</p>
                            <p className="poem-content">{item.content}</p>
                            <p>
                                By:{" "}
                                <Button href={item.poet.url}  variant="link">
                                    {item.poet.name}
                                </Button>
                            </p>
                        </li>
                    );
                })}
            </ul>
        ) : (
            this.renderPlaceholder()
        );
    }

    renderPlaceholder() {
        return (
            <div className="placeholder">
                <h3>Wait a Second...</h3>
                <Spinner animation="grow" variant="light" />
            </div>
        );
    }

    renderContent() {
        return (
            <div className="poem-container">
                <h2>Poems a day!</h2>
                {this.renderPoem()}
            </div>
        );
    }

    renderAni() {
        return (
            <div className="animate-container">
                <div className="animate">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="wineglass wineglass-left">
                        <div className="wineglass-top"></div>
                    </div>{" "}
                    <div className="wineglass wineglass-right">
                        <div className="wineglass-top"></div>
                    </div>{" "}
                </div>
            </div>
        );
    }

    renderFooter() {
        return <Footer hasBack={true} />;
    }

    render() {
        return (
            <div className="main">
                {this.renderHeader()}
                <div className="main-contontent">
                    {this.renderContent()}
                    {this.renderAni()}
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}

export default Recommend;
