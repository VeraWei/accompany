import React from "react";
import Button from 'react-bootstrap/Button';
import "./index.scss";
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li>
                        <Button href="https://github.com/VeraWei" variant="link">GitHub</Button>
                    </li>
                    <li>
                        <Button href="https://medium.com/@vera.wqm" variant="link">Medium</Button>
                    </li>
                    <li>
                        <Button href="https://twitter.com/qiumingwei1" variant="link">Twitter</Button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;
