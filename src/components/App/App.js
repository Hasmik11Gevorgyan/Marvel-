import { Component } from "react";
import AppHeader from "../AppHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import decoration from "../resources/img/vision (2).png";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import ComicList from "../comicList/comicList";
import AppBanner from "../AppBaner/appBaner";

export default class App extends Component{
   state = {
    selectedChar :null 
   }


   onCharSelected =(id)=>{
    this.setState({
        selectedChar: id
      });
   }


   render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="char__content">
            <ErrorBoundary>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundary>
          </div>
          <img src={decoration} alt="vision" className="bg-decoration" />
        </main>
      </div>
    );
  }
}