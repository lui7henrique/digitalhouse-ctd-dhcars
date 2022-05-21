// Vendors

// Components
import { LayoutDefault } from "layouts/Default"
import { CarsTemplate } from "templates/CarsTemplate"

// Types
export type CarsProps = {}

/*
|-----------------------------------------------------------------------------
| Page
|-----------------------------------------------------------------------------
|
|
*/

const Cars = (props: CarsProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */

  const {} = props

  return (
    <LayoutDefault>
      <CarsTemplate />
    </LayoutDefault>
  )
}

export default Cars

/*
 |-----------------------------------------------------------------------------
 | NextJS Data Fetching (SSR, SSG)
 |-----------------------------------------------------------------------------
 |
 |
 */
