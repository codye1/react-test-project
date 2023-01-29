import { createContext, PropsWithChildren, useContext,useState } from "react";


type ContextValue = {
    isAuth?: boolean
    isLoading?: boolean
    setIsAuth?: (b:boolean) => void
    setIsLoading?: (b:boolean) => void
    stIsAuth?:(b:boolean) => void
   }
const AuthContext =createContext<ContextValue | null>(null)

export const useAuth = () => {
    const contextValue = useContext(AuthContext)

    if (!contextValue) {
      throw new Error('Плиз, оберните свое приложени в мой провайдер')
    }

    return contextValue
  }

  type AuthProviderProps = PropsWithChildren

  export const AuthProvider = ({ children }: AuthProviderProps) => {
    let [isAuth,setIsAuth]= useState(false)
    const [isLoading,setIsLoading]=useState(false)
    return <AuthContext.Provider value={{
        isAuth,
      isLoading,
      setIsAuth,
      setIsLoading
    }}>
      {children}
    </AuthContext.Provider>
  }
