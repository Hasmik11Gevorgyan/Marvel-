import useHttp from "../../hooks/http.hooks";

const  useMarvelService = () => {
  const  {loading,  error, request, clearError} = useHttp();
 
  const _API_URL = "https://gateway.marvel.com:443/v1/public";
  // const _API_KEY = "apikey=f886cb3db7c49504cc7206fb26ead8c0";
  
  const _API_KEY = "apikey=0ac8f227d36f2891df0f1b83811b1405"
  const _LIMIT = 9;
  const _CHAR_OFFSET = 210;

   

   const  getAllCharacters = async (offset = _CHAR_OFFSET) =>{
      const res = await this.request(`${_API_URL}/characters?limit=${_LIMIT}&offset=${offset}&${_API_KEY}`); 
    return res.data.results.map(char => _transformCharacter(char))
    }
    const getAllComics = async (offset = 0) => {
      const res = await request(`${_API_URL}/comics?orderBy=issueNumber&limit=8&offset=${offset}&${_API_KEY}`);
      return res.data.results.map(_transformComics);
    };

    const getComic = async (id) => {
      const res = await request(`${_API_URL}/comics/${id}?${_API_KEY}`);
      return _transformComics(res.data.results[0]);
    };
    
   const getCharacter = async(id) =>{
     const res = await request(`${_API_URL}/characters/${id}?${_API_KEY}`) 
    return   _transformCharacter(res.data.results[0])
    };
const  _transformCharacter = (char)=>{
return {
  id: char.id,
    name: char.name,
    description: char.description ? `${char.description.slice(0, 210)}...` : "There is no description for this character",
    thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
    comics:char.comics.items
}
}

const getCharactersByName = async (name) => {
  const response = await fetch(`${this._apiBase}/characters?nameStartsWith=${name}&apikey=${this._apiKey}`);
  if (!response.ok) {
    throw new Error(`Could not fetch characters, status: ${response.status}`);
  }
  return await response.json();
}

const _transformComics = (comics) => {
  return {
    id: comics.id,
    title: comics.title,
    description: comics.description ? `${comics.description.slice(0, 210)}...` : "There is no description for this character",
    pageCount: comics.pageCount ? `${comics.pageCount}` : `No information about the number of pages`,
    thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
    language: comics.textObjects[0]?.language || "en-us",
    price: comics.prices[0].price ? `$ ${comics.prices[0].price}` : `not available`
  }
};
return {loading,error, getAllCharacters,getAllComics,getComic, getCharacter, clearError,getCharactersByName}
}

export default useMarvelService;