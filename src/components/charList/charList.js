import { Component } from "react";
import "../charList/charList.scss"
import abyss from "../resources/img/abyss (2).jpg"
import "../style/style.scss"
import MarvelService from "../comicList/services/marvelService";


export default class CharList extends Component{
    state = {
      items:[],
      activeIndex:0,
      error:null, 
    };
  marvelService = new MarvelService();


    handleClick = (index) =>{
      this.setState({avtiveIndex:index})
    }

    componentDidMount(){
      fetch(`${this._API_URL}/characters?limit=9&offset=210&${this._API_KEY}`)
      .then((response) =>{
        if(!response.ok){
          throw new Error("network error")
        }
        return response.json()
      })
      .then((data) => this.setState({items:data}))
      .catch((error) => this.setState({error}))
    }
    render(){

      const {activeIndex,items,error} = this.state;
      if(error){
        return <p>{error.message}</p>
      }
        return (
          
            <div className="char__list">
              <ul className="char__grid">
                {/* <li className="char__item">
                  <img src={abyss} alt="abyss"/>
                  <div className="char__name">Abyss</div>
                </li>
                <li className={activeIndex === index?"char__item__selected": ""}>
                  <img src={abyss} alt="abyss"/>
                  <div className="char__name">Abyss</div>
                </li> */}
                {items.map((item,index)=> (
                 <li 
                 onClick={()=>this.handleClick(index)}
                 className= {activeIndex === index?"char__item__selected": ""}
                  key= {item.id}
                 img src={abyss} alt="abyss"
                 />
                ))}
              </ul>
              <button className="button button__main button__long">
                <div className="inner">load more</div>
              </button>
            </div>
          );
    }
}