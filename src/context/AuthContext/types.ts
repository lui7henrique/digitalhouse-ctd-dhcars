/* eslint-disable no-unused-vars */

import { User } from "@supabase/supabase-js"

export type AuthContextType = {
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  signUp: (
    email: string,
    password: string,
    data: { name: string; cnh: string }
  ) => Promise<void>
}
