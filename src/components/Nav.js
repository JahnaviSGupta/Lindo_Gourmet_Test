import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">
        <img src="/images/LindoGourmetLogo.png" alt="logo" />
      </Link>
      <Link to="/products">Products</Link>
    </div>
  );
}
