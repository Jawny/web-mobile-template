import React, {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { firebaseAuth } from "configs";
import { IAuthContextValue } from "interfaces";

export const AuthContext = createContext<IAuthContextValue>({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = firebaseAuth;

    // Listen for changes in the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Clean up the event listener
    return () => unsubscribe();
  }, []);

  const value: IAuthContextValue = {
    user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
