import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export  const ProtectUser = ({children}) => {
  const { user, loading  } = useAuth();
  

  if (loading) return <h2>loading...</h2>;
  if (!user) return <Navigate to="/" />;
  
  return <>{children}</>;
};