
import xMen from "../resources/img/x-men (2).png"
import "./singleComic.scss"
export default function SingleComic () {
  return(
    <div className="single-comic">
       <img src={xMen} alt="xMen" className="single-comic__img" />
    <div className="single-comic__info">
      <h2 className="single-comic__name">X-Men: Days of Future Past</h2>
      <p className="single-comic__descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
      <p className="single-comic__descr">144 pages</p>
      <p className="single-comic__descr">Language: en-us</p>
      <p className="single-comic__price">9.99$</p>
    </div>
    <a href="https://www.google.com/" className="single-comic__back">Back to all</a> 
    </div>
)
}