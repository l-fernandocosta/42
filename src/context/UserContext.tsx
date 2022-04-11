import { GoogleAuthProvider, signInWithPopup, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { Auth } from '../services/firebase';
import { ContextProps, UserContextProps, UserProps } from './ContextProps';



export const UserContext = createContext<ContextProps>({} as ContextProps);

export const useAuth = () => useContext(UserContext);

export function UserProvider({ children }: UserContextProps) {

  const [user, setUser] = useState<UserProps>();
  const [isLoading, setIsLoading] = useState(false);
  const provider = new GoogleAuthProvider();

  useEffect( () => {

    const unsubscribe = Auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
  
        if (!displayName || !photoURL) {
          throw new Error('Missing data from Google')
        }
  
        setUser(
          {
            name: displayName,
            email: email,
            photo: photoURL,
            uid: uid,
          }
        )
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])

  async function loginWithGoogle() {
    setIsLoading(true)
    const result = await signInWithPopup(Auth, provider).finally(() => {setIsLoading(false)})

    if (result.user) {
      
      const { displayName, email, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing data from Google')
      }
      setUser(
        {
          name: displayName,
          email: email,
          photo: photoURL,
          uid: uid,
        }
      )
      
    }
    
  
  }
  return (
    <UserContext.Provider value={{ user, loginWithGoogle, isLoading }}>{children}</UserContext.Provider>
  )
}