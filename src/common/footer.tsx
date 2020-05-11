import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./index.scss";

interface FooterProps {
    hasBack?: boolean
}

class Footer extends React.Component<FooterProps> {
    render() {
        const dateTime = new Date().toDateString();

        const { hasBack } = this.props;
        return (
            <div className="footer">
                { hasBack && <Link to="/self-isolation-fun-front" className="back"> <span> Go Back</span></Link>}
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
                    <span className="time">{dateTime}</span>
            </div>
        );
    }
}

export default Footer;
