import { createRoot } from "react-dom/client";
import "../components/style/style.scss";
// import "normalize";
import App from "../components/App/App";
import MarvelService from "../components/comicList/services/marvelService";


const container = document.getElementById("root");
const root = createRoot(container);

const marvelService = new MarvelService();
marvelService.getAllCharacters()
.then(data =>console.log(data.data.results.forEach(item =>{
    console.log(item.resourceURI);
    
})))
.catch(e => console.log(e));
  
 marvelService.getSingleCharacter(1010699)
 .then(data =>console.log(data))
.catch(e => console.log(e));


root.render(
    <App/>
)