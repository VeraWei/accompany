import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { HELPER_URL } from "../util/url";
import  { HTTP } from "../util/http";
import "./index.scss";

interface TextProps { type: string };
class Text extends React.Component<TextProps> {
  state = {
    content: null
  };
  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { type } = this.props;
    const url = HELPER_URL[type];
    const content = await HTTP.Get({url});
    console.log(content);
    this.setState({
      content
    })
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
