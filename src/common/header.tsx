import React from "react";
import "./index.scss";
import logo from "./logo.png";
class Header extends React.Component {
    renderName() {
        const userName = localStorage.getItem("name");
        return (
            <div className="content">
                <div className="content__container">
                    <ul className="content__container__list">
                        <li className="content__container__list__item">
                            Holla {userName}!
                        </li>
                        <li className="content__container__list__item">
                            Nice to meet you here!
                        </li>
                        <li className="content__container__list__item">
                            How are you today?
                        </li>
                        <li className="content__container__list__item">
                            Let's take a break.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="header">
                <div className="left">
                    <img src={logo} alt="" />
                </div>
                {this.renderName()}
            </div>
        );
    }
}

export default Header;
