
import avengers from "../resources/img/Avengers (2).png"
import avengersLogo from "../resources/img/Avengers_logo (2).png"
import "./appBanner.scss";


export default function AppBanner () {
    return (
      <div className="app__banner">
        <img src={avengers} alt="Avengers" />
        <div className="app__banner-text">
          New comics every week!<br />
          Stay tuned!
        </div>
        <img src={avengersLogo} alt="Avengers Logo" />
      </div>
    );
  }