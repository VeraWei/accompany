import React from "react";
import {
  Link
} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
// import Dance from "./dance";
import Blood from "./blood";
import Text from "./text";
import "./index.scss";

class Desire extends React.Component {
    state = {
        contentComponent: undefined,
    };

    onClickJoke = () => {
        this.setState({
            contentComponent: <Text type={"JOKE"} key="joke"/>,
        });
    };

    onClickSoup = () => {
        this.setState({
            contentComponent: <Text type={"ADVICE"} key="advice" />,
        });
    };
    onClickBlood = () => { 
        this.setState({
            contentComponent: <Blood key="blood" />,
        });
    };
    onClickSuprise = () => { 
        this.setState({
            contentComponent: <Text type={"JOKE"}  key="suprise"/>,
        });
    };

    renderContent() { 
        const { contentComponent } = this.state;
        return contentComponent;
    }

    renderList() {
        return (
            <ListGroup.Item>
                <ListGroup.Item onClick={this.onClickJoke} action variant="primary">
                    Tell me a joke!
                </ListGroup.Item>
                <ListGroup.Item onClick={this.onClickSoup} action variant="secondary">
                    Drink a cup of chicken soup!
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                    <Link to="/self-isolation-fun-front/dance">Dancing for me!</Link>
                </ListGroup.Item>
                <ListGroup.Item variant="danger">
                    <Link to="/self-isolation-fun-front/blood">Warm my blood!</Link>
                </ListGroup.Item>
                <ListGroup.Item onClick={this.onClickSuprise} action variant="dark">
                    I don't care, suprise me!
                </ListGroup.Item>
            </ListGroup.Item>
        );
    }

    render() {
        return (
            <div className="container">
                <p>What do you want?</p>
                {this.renderList()}
                {this.renderContent()}
            </div>
        );
    }
}

export default Desire;
