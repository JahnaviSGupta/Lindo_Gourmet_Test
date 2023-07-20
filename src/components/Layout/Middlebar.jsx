import { Link } from "react-router-dom";
import SearchBox from "../Helpers/SearchBox";

export default function Middlebar({ className }) {
  return (
    <div className={`w-full bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex items-center h-full">
            <div className="col-4">
              <Link to="/">
                <img
                  width="250"
                  height="125"
                  src={`${process.env.PUBLIC_URL}/assets/images/Logo.jpg`}
                  alt="IpserLabStartup4"
                />
              </Link>
            </div>
            <div className="w-[500px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
