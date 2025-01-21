import "../randomChar/randomChar.scss";
import { Component } from "react";
import MarvelService from "../comicList/services/marvelService";
import mjolnir from "../resources/img/mjolnir (2).png"

export default class RandomChar extends Component{
  constructor (props){
    super(props);
    this.upDateChar();
  }
  state={
    char:{},
    loading:true
  }
   marvelService = new MarvelService();

  onCharLoaded =(char)=>{
  this.setState({char});
  console.log(this.state.char);
  
}

   upDateChar = () =>{
    const id = Math.floor(Math.random()*(1011400-1011000) + 1011000);
    this.marvelService
    .getSingleCharacter(id)
    .then(this.onCharLoaded)
    .catch(e => console.log(e))
    
   }
    render(){
      const {char:{name, description, thumbnail, homepage, wiki}} = this.state
        return (
            <div className="randomchar">
              <div className="randomchar__block">
                <img src={thumbnail} alt={name} className="randomchar__img" />
                <div className="randomchar__info">
                  <p className="randomchar__name">{name}</p>
                  <p className="randomchar__descr">
                   {description}
                  </p>
                  <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                      <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
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