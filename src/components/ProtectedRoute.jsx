import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/userSlice";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, to = null }) {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;
  const pathname = useLocation().pathname;
  const redirect = to || pathname;
  const url = "/login" + (redirect ? "?redirect=" + redirect : "");

  return isLoggedIn ? <>{children}</> : <Navigate to={url} />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.string,
};

export default ProtectedRoute;
