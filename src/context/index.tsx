import { ReactNode } from "react"

import { AuthContextProvider } from "./AuthContext"

type AppProviderProps = {
  children: ReactNode
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props

  return <AuthContextProvider>{children}</AuthContextProvider>
}
