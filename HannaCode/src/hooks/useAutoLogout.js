import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AUTO_LOGOUT_TIME = 60 * 60 * 1000; // 1 hour in ms

export default function useAutoLogout(logoutCallback) {
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      localStorage.setItem("lastActivity", Date.now());
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(handleLogout, AUTO_LOGOUT_TIME);
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("lastActivity");
      if (logoutCallback) logoutCallback();
      navigate("/login");
    };

    // Check on mount
    const last = localStorage.getItem("lastActivity");
    if (last && Date.now() - last > AUTO_LOGOUT_TIME) {
      handleLogout();
    } else {
      resetTimer();
    }

    // Listen for user activity
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, []);
}