import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { HELPER_URL } from "../util/url";
import "./index.scss";

const axios = require("axios");

type TextProps = { type: string };
class Text extends React.Component<TextProps> {
  state = {
    content: null
  };
  componentDidMount() {
    this.getData();
  }

  getData() {
    const { type } = this.props;
    const url = HELPER_URL[type];
    axios({
      method: "get",
      headers: { accept: "application/json" },
      url
    })
      .then((response: any) => {
        // handle success
        this.setState({
          content: response.data.content
        });
      })
      .catch((error: any) => {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    const { content } = this.state;
    return (
      <div className="container">
        {content ? (
          <p>{content}</p>
        ) : (
          <Spinner animation="grow" variant="light" />
        )}
      </div>
    );
  }
}

export default Text;
