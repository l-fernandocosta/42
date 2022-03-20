import { ReactNode } from "react"

export type UserProps = {
  name: string | null, 
  email: string| null,
  photo: string| null,
  uid: string
}

export type ContextProps= {
  user: UserProps | undefined,
  loginWithGoogle: () => Promise<void>, 
  isLoading: boolean,
}

export type UserContextProps = {
  children: ReactNode,
}
