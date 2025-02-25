import React, { useState } from "react";
import AppHeader from "../AppHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import decoration from "../resources/img/vision (2).png";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import ComicList from "../comicList/comicList";
import AppBanner from "../AppBaner/appBaner";

export default function App (){
   const [selectedChar, setSelectedChar] = useState(null)


 const   onCharSelected =(id)=>{
    setSelectedChar(id);
   }
   return (
    <div className="app">
    <AppBanner />
    <ComicList />
      <AppHeader />
      <main>
        <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        <div className="char__content">
          <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
        </div>
        <img src={decoration} alt="vision" className="bg-decoration" />
      </main>
    </div>
  );

  
}