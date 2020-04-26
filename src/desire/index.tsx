import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Dance from "./dance";
import Blood from "./blood";
import Text from "./text";
import "./index.scss";

class Desire extends React.Component {
      state = {
        contentComponent: undefined,
      };

    onClickJoke = () => {
        this.setState({
            contentComponent: <Text />,
        });
    };

    onClickSoup = () => {
        this.setState({
            contentComponent: <Text />,
        });
    };
    onClickDance = () => { 
        this.setState({
            contentComponent: <Dance />,
        });
    };
    onClickBlood = () => { 

        this.setState({
            contentComponent: <Blood />,
        });
    };
    onClickSuprise = () => { 
        this.setState({
            contentComponent: <Text />,
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
                <ListGroup.Item onClick={this.onClickDance} action variant="success">
                    Dancing for me!
        </ListGroup.Item>
                <ListGroup.Item onClick={this.onClickBlood} action variant="danger">
                    Warm my blood!
        </ListGroup.Item>
                <ListGroup.Item onClick={this.onClickSuprise} action variant="dark">
                    I don't care, suprise me!
        </ListGroup.Item>
            </ListGroup.Item>
        );
    }

    render() {
        return (
            <div>
                <p>What do you want?</p>
                {this.renderList()}
                {this.renderContent()}
            </div>
        );
    }
}

export default Desire;
