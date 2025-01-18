import { Component } from "react";
import "./appHeader.scss";


 export default class AppHeader extends Component{
    render(){
        return(
            <header className="appHeader">
  <h1>
    <a href="https://www.google.com/">
  <span> MArvel information Portal</span>
    </a>
  </h1>
  <nav className="app_menu">
<ul>
    <li>
        <a href="https://www.google.com/"> Charactres</a>
    </li>
    /
    <li>
    <a href="https://www.google.com/"> Comics</a>
    </li>
</ul>
  </nav>
            </header>
        )
    }
}