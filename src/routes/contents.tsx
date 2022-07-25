import { url } from "inspector";
import React from "react";
import logo from "../logo.svg";
import top_center from "../images/top_center.svg"
import contents from "../assets/img/contents_tyui.svg"
import contents2 from "../assets/img/contents_map.svg"
import contents3 from "../assets/img/contents_event.svg"
import './contents.css';
import { Link, NavLink, useHistory } from "react-router-dom";
import Header from "./headermain"


function Contents() {
    return (

        <div>
            <header className="background_contents">
            <Link to={"/tyui"}>
                    <img src={contents} className="contents_tyui"/>
                </Link>
            <Link to={"/map"}>
                    <img src={contents2} className="contents_map"/>
                </Link>
                <img src={contents3} className="contents_event"/>

            </header>
            <Header/>
        </div>
    );
}

export default Contents;