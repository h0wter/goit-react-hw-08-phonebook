import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  return isLoggedIn || isRefreshing ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} />
  );
};
