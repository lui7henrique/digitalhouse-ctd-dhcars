// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import { RegisterTemplate } from "templates/RegisterTemplate"

// Types
export type RegisterProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Register = (props: RegisterProps) => {
  const {} = props

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <LayoutDefault header={{ title: "Register" }}>
      <RegisterTemplate />
    </LayoutDefault>
  )
}

export default Register

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
