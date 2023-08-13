import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsAdmin, selectIsLoggedIn } from "../redux/userSlice";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, to = null, role = 1 }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAdmin = useSelector(selectIsAdmin);
  const userRole = isLoggedIn ? (isAdmin ? 2 : 1) : 0;
  const pathname = useLocation().pathname;
  const redirect = to || pathname;

  const url = userRole >= 1 ? "/main" : "/login?redirect=" + redirect;

  return userRole >= role ? <>{children}</> : <Navigate to={url} />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  role: PropTypes.number,
};

export default ProtectedRoute;
