import { useState } from "react";

import RandomChar from "../components/randomChar/RandomChar"
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

// Boundary
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

import decoration from "../components/resources/img/vision (2).png"
import CharacterSearch from "../components/CharacterSearch/CharacterSearch";

export default function MainPage() {
  const [selectedChar, setChar] = useState(null);
  const onCharSelected = id => setChar(id);

  return (
    <>
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
        <CharacterSearch/>
      </div>
      <img src={decoration} alt="vision" className="bg-decoration" />
    </>
  );
}