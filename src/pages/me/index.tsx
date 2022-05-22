// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import { supabase } from "services/supabase"
import { LoginTemplate } from "templates/LoginTemplate"
import { MeTemplate } from "templates/MeTemplate"

// Types
export type MeProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Me = (props: MeProps) => {
  const {} = props

  const user = supabase.auth.user()

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */

  return (
    <LayoutDefault
      header={{
        title: user ? `Bem-vindo!` : ""
      }}
    >
      {user ? <MeTemplate /> : <LoginTemplate />}
    </LayoutDefault>
  )
}

export default Me

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
