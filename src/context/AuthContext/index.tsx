/* eslint-disable no-unused-vars */
// Vendors
import { AuthChangeEvent, Session } from "@supabase/supabase-js"
import { useRouter } from "next/dist/client/router"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react"
import toast from "react-hot-toast"
import { supabase } from "services/supabase"
import { useTheme } from "styled-components"
import { sleep } from "utils/sleep"

// Types
import { AuthContextType } from "./types"

export const AuthContext = createContext({} as AuthContextType)

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */

  const { children } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { colors } = useTheme()
  const { push } = useRouter()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [authenticatedState, setAuthenticatedState] =
    useState("not-authenticated")

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

  const defaultToastStyles = useCallback(() => {
    return {
      boxShadow: "none",
      backgroundColor: colors.shape,
      color: "#FFF",
      padding: "1rem",
      borderRadius: "0"
    }
  }, [colors.shape])

  const handleAuthChange = useCallback(
    async (event: AuthChangeEvent, session: Session | null) => {
      await fetch("/api/auth", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
        body: JSON.stringify({ event, session })
      })
    },
    []
  )

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const { user, session, error } = await supabase.auth.signIn({
          email,
          password
        })

        if (!error && user) {
          setAuthenticatedState("authenticated")
          await handleAuthChange("SIGNED_IN", session)

          toast.promise(
            push("/me"),
            {
              loading: "Redirecionando para o app...",
              success: <b>Login feito com sucesso.</b>,
              error: <b>Não foi possível te redirecionar.</b>
            },
            {
              style: defaultToastStyles()
            }
          )
        }

        if (error) {
          toast.error(
            "Por favor, tente novamente, suas credenciais são inválidas.",
            {
              style: defaultToastStyles()
            }
          )
        }
      } catch {}
    },
    [defaultToastStyles, handleAuthChange, push]
  )

  const logout = useCallback(async () => {
    toast.promise(
      push("/home"),
      {
        loading: "Redirecionando para o app...",
        success: <b>Até mais 👋</b>,
        error: <b>Não foi possível fazer o logout</b>
      },
      {
        style: defaultToastStyles()
      }
    )

    await supabase.auth.signOut()
    setAuthenticatedState("not-authenticated")
    await handleAuthChange("SIGNED_OUT", null)
  }, [defaultToastStyles, handleAuthChange, push])

  const signUp = useCallback(
    async (
      email: string,
      password: string,
      data: {
        name: string
        cnh: string
      }
    ) => {
      try {
        const { user, error } = await supabase.auth.signUp(
          {
            email,
            password
          },
          {
            data: {
              name: data.name,
              cnh: data.cnh
            }
          }
        )

        const successfully = user && !error

        if (successfully) {
          toast.success(
            "Conta criada com sucesso, verifique-a em seu e-mail para logar na aplicação",
            {
              style: defaultToastStyles()
            }
          )

          push("/me")
        }
      } catch {}
    },
    [defaultToastStyles, push]
  )

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */

  return (
    <AuthContext.Provider value={{ login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const value = useContext(AuthContext)

  return value
}
