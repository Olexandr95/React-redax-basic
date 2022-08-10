import React from "react";
import {Component} from "react";
import Nav from "./nav";
import './header-css.scss';



export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header-logo">
                    <img className="logo" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></img>
                    <Nav/>
                </div>
            </div>
        )
    }
}