import "../randomChar/randomChar.scss";
import { Component } from "react";
import thor from "../resources/img/thor (2).jpeg"
import mjolnir from "../resources/img/mjolnir (2).png"

export default class RandomChar extends Component{
  state={
    name:null,
    description: null,
    thumbnail:null
  }
    render(){
        return (
            <div className="randomchar">
              <div className="randomchar__block">
                <img src={thor} alt="Thor" className="randomchar__img" />
                <div className="randomchar__info">
                  <p className="randomchar__name">Thor</p>
                  <p className="randomchar__descr">
                    As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                  </p>
                  <div className="randomchar__btns">
                    <a href="https://www.google.com/" className="button button__main">
                      <div className="inner">homepage</div>
                    </a>
                    <a href="https://www.google.com/" className="button button__secondary">
                      <div className="inner">wiki</div>
                    </a>
                  </div>
                </div>
              </div>
      
              <div className="randomchar__static">
                <p className="randomchar__title">
                  Random character for today!
                  Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                  Or choose another one
                </p>
                <button className="button button__main">
                  <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
              </div>
            </div>
          );
    }
}