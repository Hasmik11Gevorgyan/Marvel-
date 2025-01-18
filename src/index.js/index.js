import { createRoot } from "react-dom/client";
import "../components/style/style.scss";
// import "normalize";
import App from "../components/App/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <App/>
)