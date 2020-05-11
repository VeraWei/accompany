import React from "react";
import "./index.scss";
// import Header from "./header";
// import Footer from "./footer";
class Error extends React.Component {

    render() {
        return (
            <div className="error-page">
                {/* <Header /> */}
                <p>Oops, seems something wrong. Refresh the page or contact me!</p>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Error;
