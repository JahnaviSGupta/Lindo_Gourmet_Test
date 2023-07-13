import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./Unchurch.css";
import Router from "./components/Router";
import { setPrefix } from "./lib/Bandung";
import "./lib/Bandung.css";




// setPrefix("http://localhost:5000/https://www.unchurch.org") ;
// setPrefix("http://localhost:5000/https://www.uncovergem.com") ;
// setPrefix("http://localhost:5000/https://startup4.ipserlab.com") ;
setPrefix("http://localhost:5000/https://www.lindogourmet.com") ;
// setPrefix("http://localhost:5000/https://www.tectralabs.com") ;
// setPrefix("http://localhost:5000/http://localhost:8080") ;

AOS.init() ;

ReactDOM.createRoot(document.getElementById("root")).render(<Router/>) ;
