import { Component } from "react";
import AppHeader from "../AppHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import decoration from "../resources/img/vision (2).png";


export default class App extends Component{
   render(){
    return(
        <div className="app">
            <AppHeader/>
            <main>
            <RandomChar/>
            <div className="char__content">
            <CharList/>
            <CharInfo/>

           </div>
           <img src={decoration} alt="vision" className="bg-decoration" />
           </main>
           
        </div>
    )
   }
}