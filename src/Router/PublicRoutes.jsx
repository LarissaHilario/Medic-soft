import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const authState = localStorage.getItem('token') || null;
  return authState !== null ? <Navigate to={'/'} /> : children;
};

export default PublicRoutes;
