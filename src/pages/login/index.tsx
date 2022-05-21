// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import { LoginTemplate } from "templates/LoginTemplate"

// Types
export type LoginProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Login = (props: LoginProps) => {
  const {} = props

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <LayoutDefault>
      <LoginTemplate />
    </LayoutDefault>
  )
}

export default Login

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
