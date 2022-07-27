import "../styles/HeaderLink.css";
import { Link } from "react-router-dom";

export const HeaderLink = (props) => {
  return (
    <Link to={props.linkTo} className="header__link">
      {props.name}
    </Link>
  );
};
