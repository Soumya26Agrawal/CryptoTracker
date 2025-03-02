import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
// Adjust path if needed

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/main");
      } else {
        navigate("/signin");
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [navigate]); // Only depends on `navigate`
};

export default useAuthRedirect;
