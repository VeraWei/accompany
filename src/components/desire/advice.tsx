import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { HELPER_URL } from "../../util/url";
import { HTTP } from "../../util/http";
import Footer from "../../common/footer";
import Header from "../../common/header";
import "./index.scss";

class Advice extends React.Component {
    state = {
        content: null,
    };
    componentDidMount() {
        this.getData();
    }

    async getData() {
        const url = HELPER_URL["ADVICE"];
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

    renderFooter() {
        return <Footer />;
    }

    render() {
        const { content } = this.state;
        return (
            <div className="container">
                {this.renderHeader()}
                <div className="main-contontent">
                    {content ? (
                        <p>{content}</p>
                    ) : (
                        <Spinner animation="grow" variant="light" />
                    )}
                {this.renderFooter()}
                </div>
            </div>
        );
    }
}

export default Advice;
