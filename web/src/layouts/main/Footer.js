import React from "react";

const Footer = () => {
    return (
        <footer className={"bg-blue-800 pt-3 text-center"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-4"}><span className={"copyright"}>Copyright © Jaypee 2020</span></div>
                    <div className={"col-md-4"}>
                        <ul className={"list-inline social-buttons"}>
                            <li className={"list-inline-item"}><a href={"#"}><i className={"fa fa-twitter"}></i></a></li>
                            <li className={"list-inline-item"}><a href={"#"}><i className={"fa fa-facebook"}></i></a></li>
                            <li className={"list-inline-item"}><a href={"#"}><i className={"fa fa-linkedin"}></i></a></li>
                        </ul>
                    </div>
                    <div className={"col-md-4"}>
                        <ul className={"list-inline quicklinks"}>
                            <li className={"list-inline-item"}><a href={"#"}>Privacy Policy</a></li>
                            <li className={"list-inline-item"}><a href={"#"}>Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;