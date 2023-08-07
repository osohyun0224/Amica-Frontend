import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/userSlice";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const pathname = useLocation().pathname;
  const url = "/login" + (pathname ? "?redirect=" + pathname : "");

  return isLoggedIn ? <>{children}</> : <Navigate to={url} />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.string,
};

export default ProtectedRoute;
