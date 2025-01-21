import { Component } from "react";
import "./comicList.scss"
import uw from "../../resources/img/UW (2).png"
import xmen from "../../resources/img/x-men (2).png"

export default class ComicList extends Component{
    render(){
        return(
            <div className="comic__list">
<ul className="comics__grid">
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={uw}  alt="ultimate war" className="comics__item__img"/>
          <div className="comics__item-name">Ultimate WarUltimate WarUltimate WarUltimate War </div>
          <div className="comics__item-price">9.99$</div>
          </a>
     </li>
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={xmen}  alt="x-men" className="comics__item__img"/>
          <div className="comics__item-name">X:Men:Days of future pastWarUltimate War </div>
          <div className="comics__item-price">8.99$</div>
          </a>
     </li>
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={uw}  alt="ultimate war" className="comics__item__img"/>
          <div className="comics__item-name">Ultimate WarUltimate WarUltimate WarUltimate War </div>
          <div className="comics__item-price">9.99$</div>
          </a>
     </li>
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={xmen}  alt="x-men" className="comics__item__img"/>
          <div className="comics__item-name">X:Men:Days of future pastWarUltimate War </div>
          <div className="comics__item-price">8.99$</div>
          </a>
     </li>
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={uw}  alt="ultimate war" className="comics__item__img"/>
          <div className="comics__item-name">Ultimate WarUltimate WarUltimate WarUltimate War </div>
          <div className="comics__item-price">9.99$</div>
          </a>
     </li>
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={xmen}  alt="x-men" className="comics__item__img"/>
          <div className="comics__item-name">X:Men:Days of future pastWarUltimate War </div>
          <div className="comics__item-price">8.99$</div>
          </a>
     </li>
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={uw}  alt="ultimate war" className="comics__item__img"/>
          <div className="comics__item-name">Ultimate WarUltimate WarUltimate WarUltimate War </div>
          <div className="comics__item-price">9.99$</div>
          </a>
     </li>
     <li className="comics__item">
         <a href="https://www.google.com/"> 
          <img src={xmen}  alt="x-men" className="comics__item__img"/>
          <div className="comics__item-name">X:Men:Days of future pastWarUltimate War </div>
          <div className="comics__item-price">8.99$</div>
          </a>
     </li>
</ul>
            </div>
        )
    }
}