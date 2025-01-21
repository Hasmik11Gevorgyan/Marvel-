import { Component } from "react";
import avengers from "../resources/img/Avengers (2).png"
import avengersLogo from "../resources/img/Avengers_logo (2).png"
import "./appBanner.scss";


export default class AppBanner extends Component{
    render(){
        return(
            <div className="app__banner">
        <img src={avengers} alt="Avengers" />
        <div className="app__banner-text">
            New comics every week! <br/>
            Stay tuned!
        </div>
        <img src={avengersLogo} alt="AvengersLogo" />
            </div>
        )
    }
}