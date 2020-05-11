import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { HELPER_URL } from "../../util/url";
import { HTTP } from "../../util/http";
import Footer from "../../common/footer";
import Header from "../../common/header";
import "./index.scss";

class Joke extends React.Component {
    state = {
        content: null,
    };
    componentDidMount() {
        this.getData();
        this.updateUser();
    }

    async getData() {
        const url = HELPER_URL["JOKE"];
        const content = await HTTP.Get({ url });
        console.log(content);
        this.setState({
            content,
        });
    }

    async updateUser() {
        const url = HELPER_URL["UPDATEUSER"];
        const name = localStorage.getItem("name");
        const feel = localStorage.getItem("feel");
        if (!feel) {
            await HTTP.Put({
                url,
                data: {
                    name,
                    feel: 0,
                },
            });
            localStorage.setItem("feel", "0");
            // console.log(content);
        }
    }
    // TODO animation
    renderHeader() {
        return <Header />;
    }

    renderFooter() {
        return (
            <div>
                <Footer hasBack={true} />
            </div>
        );
    }

    render() {
        const { content } = this.state;
        return (
            <div className="main">
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

export default Joke;
