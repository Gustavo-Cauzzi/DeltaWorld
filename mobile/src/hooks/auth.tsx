import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface User {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
  isAdmin: boolean;
}

interface AuthState {
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = useCallback(async ({email, password}) => {
    const user = {
      user:{
        avatar_url: "https://avatars2.githubusercontent.com/u/66269430?s=460&u=8e27141ffbafda67ee7a03ea4034356f7f4f4c45&v=4",
        email: 'gustavocauzzi@gmail.com',
        id: '1',
        name: 'Gustavo',
        isAdmin: true,
      }
    }

    setData(user);
  }, []);

  const signOut = useCallback(() => {
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
