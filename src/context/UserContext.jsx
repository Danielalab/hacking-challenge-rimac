import { createContext } from 'react';

// Contexto de usuario logueado
export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export default UserContext;
