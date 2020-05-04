import React from "react";
import "./index.scss";
class Header extends React.Component {
    renderName() {
        const userName = localStorage.getItem("name");
        return (
            <div className="content">
                <div className="content__container">
                    <p className="content__container__text">Holla</p>
                    <ul className="content__container__list">
                        <li className="content__container__list__item">
                            world !
                        </li>
                        <li className="content__container__list__item">
                            {userName}!
                        </li>
                        <li className="content__container__list__item">
                            users !
                        </li>
                        <li className="content__container__list__item">
                            everybody !
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        const dateTime = new Date().toDateString();
        return (
            <div className="header">
                <span className="time">{dateTime}</span>
                {this.renderName()}
                <span className="text">
                    Nice to meet you here.
                </span>
            </div>
        );
    }
}

export default Header;
