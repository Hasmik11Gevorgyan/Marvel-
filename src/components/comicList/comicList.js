import { useEffect,  useState, useRef} from "react";
import { Link } from "react-router-dom";
import Error from "../error/error";
import "./comicList.scss";
import useMarvelService from "./services/marvelService";

export default function ComicsList() {
  const [comicList, setComicList] = useState([]);
  const [onRequestLoading, setOnRequestLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [charEnded, setCharEnded] = useState(false);
  const { loading, error, getAllCharacters } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, );

  const onRequest = (offset, initial) => {
    initial ? setOnRequestLoading(false) : setOnRequestLoading(true);
    getAllCharacters(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newComicList) => {
    let ended = false;
    if (newComicList.length < 8) ended = true;

    setComicList((prevComicList) => [...prevComicList, ...newComicList]);
    setOnRequestLoading(false);
    setOffset((prevOffset) => prevOffset + 8);
    setCharEnded(ended);
  };

  const refItems = useRef([]);

  const focusOnItem = (id) => {
    refItems.current.forEach((item) => item.classList.remove("char__item_selected"));
    refItems.current[id].classList.add("char__item_selected");
    refItems.current[id].focus();
  };

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        {comicList.map((char, index) => (
          <li key={char.id} className="comics__item" 
          ref={(el) => (refItems.current[index] = el)}
          onClick={() => {
           
            focusOnItem(index);
          }}
          >
            <Link to={`/comics/${char.id}`}>
              <img src={char.image} alt={char.name} className="comics__item-img" />
              <div className="comics__item-name">{comic.name}</div>
              <div className="comics__item-price">{comic.price}</div>
            </Link>
          </li>
        ))}
      </ul>
      {onRequestLoading && loading}
      {error && {Error}}
    </div>
  );
}
