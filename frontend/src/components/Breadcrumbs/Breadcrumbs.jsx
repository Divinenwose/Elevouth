import { useLocation, useNavigate } from "react-router-dom";
import "./Breadcrumbs.css"

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumb">
      <span onClick={() => navigate("/")}>Home</span>

      {paths.map((path, index) => {
        const routeTo = "/" + paths.slice(0, index + 1).join("/");

        return (
          <span key={index}>
            {" >> "}
            <span onClick={() => navigate(routeTo)}>
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
