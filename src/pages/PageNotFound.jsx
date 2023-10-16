import { Link } from "react-router-dom";
import "./PageNotFound.css";
import { ImArrowUpLeft } from "react-icons/im";

const PageNotFound = () => {
  return (
    <div className="page">
      <h3>
        page not found{" "}
        <Link to="/">
          <h2>
            <ImArrowUpLeft />
            back to home page
          </h2>
        </Link>
      </h3>
    </div>
  );
};

export default PageNotFound;
