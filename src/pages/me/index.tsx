// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
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
        title: `Bem-vindo!`
      }}
    >
      <MeTemplate />
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
