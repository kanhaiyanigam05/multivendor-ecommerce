"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useRouter } from "next/navigation";

// Create context
const AuthContext = createContext();

// Provide context to the rest of the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Access the useRouter hook normally

  useEffect(() => {
    // Check for JWT token in localStorage on initial load
    const token = parseCookies().authToken;
    if (token) {
      setUser({ token });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const login = (token, userData, remember = false) => {
    const time = remember ? 24 * 30 : 2;
    setCookie(null, "authToken", token, {
      path: "/admin",
      maxAge: time * 60 * 60, // cookie expire in 2 hours
    });
    setCookie(null, "user", JSON.stringify(userData), {
      path: "/admin",
      maxAge: time * 60 * 60, // cookie expire in 2 hours
    });
    setUser({ token, ...userData });
    // redirect('/admin'); // Redirect to a protected page
    router.push("/admin");
  };

  const logout = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_LARAVEL_URL + "/admin/logout",
        {
          method: "POST",
        }
      );
      if (response.ok) {
        destroyCookie(null, "authToken", { path: "/" });
        destroyCookie(null, "user", { path: "/" });
        setUser(null);
        router.push("/admin/login");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
