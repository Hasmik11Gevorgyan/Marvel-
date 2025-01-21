

export default class MarvelService {
  _API_URL = "https://gateway.marvel.com:443/v1/public"
  _API_KEY ="apikey=e4e5180a916a1c8b047e7d27495ef1e7"

    getResource = async (url) =>{
  let res = await fetch(url);

  if(!res.ok){
    throw new Error(`Could not fetch ${url}, status :${res.status} `);
    
  }
  return await res.json()
    }

    getAllCharacters = () =>{
        return this.getResource(`${this._API_URL}/characters?limit=9&offset=210@${this._API_KEY}`)
    }

    getSingleCharacter = (id= 1010699) =>{
        return this.getResource(`${this._API_URL}/characters/${id}?${this._API_KEY}`) 

    }

    
}