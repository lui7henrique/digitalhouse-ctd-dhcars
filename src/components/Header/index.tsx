// Vendors
import { MenuDrawer } from "components/MenuDrawer"
import { useAuth } from "context/AuthContext"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoMdPerson } from "react-icons/io"
import { supabase } from "services/supabase"
import { useTheme } from "styled-components"

// Components
import * as S from "./styles"

// Types
export type HeaderProps = {
  title?: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Header = (props: HeaderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { title } = props
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { logout } = useAuth()
  const { colors } = useTheme()

  const user = supabase.auth.user()
  const firstName = user?.user_metadata.name.split(" ")[0]

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
    <>
      <S.Container>
        <S.Content>
          <S.LogoContainer onClick={() => setDrawerIsOpen(true)}>
            <Image src="/logo.svg" width="30px" height="18px" alt="Logo" />
          </S.LogoContainer>
          <S.Title>{title}</S.Title>

          {!user && (
            <Link href="/login">
              <a
                style={{
                  textDecoration: "none"
                }}
              >
                <S.UserContainer>
                  <S.UserLabel>Faça login</S.UserLabel>

                  <S.LoginAvatar>
                    <IoMdPerson size={24} color={colors.text} />
                  </S.LoginAvatar>
                </S.UserContainer>
              </a>
            </Link>
          )}

          {user && (
            <S.UserContainer>
              <S.UserLabelContainer>
                <S.UserLabel>Olá, {firstName}!</S.UserLabel>
                <S.UserLogout onClick={logout}>Sair</S.UserLogout>
              </S.UserLabelContainer>

              <S.LoginAvatar>
                <S.Avatar
                  src={`https://ui-avatars.com/api/?name=${user.user_metadata.name}&bold=true&background=DC1637&color=FFFFFF`}
                  alt={user.app_metadata.name}
                  layout="fill"
                />
              </S.LoginAvatar>
            </S.UserContainer>
          )}
        </S.Content>
      </S.Container>

      <MenuDrawer
        isOpen={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
        direction="left"
        size="100vw"
      />
    </>
  )
}
