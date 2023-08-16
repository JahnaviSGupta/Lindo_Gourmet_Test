import { Link } from "react-router-dom";

function DashPartOne() {
  return (
    <div className="d-flex align-items-center">
      <h1>DashBoard</h1>
      <div className="ml-auto">
        <Link to="/admin">
          <button className="btn bg-qteal w-[130px]">
            <span className="text-white">Admin</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DashPartOne;
