import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: any }) {
  const user = localStorage.getItem("user");
  
  console.log("Verificando usuario:", user);
  
  if (!user) {
    console.log("Redirigiendo a login");
    return <Navigate to="/" replace />;
  }
  
  console.log("Usuario autorizado");
  return <>{children}</>;
}

export default ProtectedRoute;