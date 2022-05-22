// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import { HomeTemplate } from "templates/HomeTemplate"

// Types
export type HomeProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Home = (props: HomeProps) => {
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
        title: "Início"
      }}
    >
      <HomeTemplate />
    </LayoutDefault>
  )
}

export default Home

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
