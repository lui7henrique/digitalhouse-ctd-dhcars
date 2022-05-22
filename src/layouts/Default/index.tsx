// Vendors
import { Footer } from "components/Footer"
import { Header, HeaderProps } from "components/Header"
import { Sidebar } from "components/Sidebar"
import { ReactNode } from "react"

import * as S from "./styles"

// Components

// Types
export type LayoutProps = {
  children: ReactNode
  header?: HeaderProps
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const LayoutDefault = (props: LayoutProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { children, header } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

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
    <S.Container>
      <Sidebar />

      <S.Content>
        <Header {...header} />

        <S.ContentContainer>
          <S.ContentWrapper>{children}</S.ContentWrapper>
          <Footer />
        </S.ContentContainer>
      </S.Content>
    </S.Container>
  )
}
