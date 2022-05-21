// Vendors
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { IoMdClose } from "react-icons/io"
import { IoMdCar, IoMdHome, IoMdPerson } from "react-icons/io"
import ReactModernDrawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"

// Components
import * as S from "./styles"

// Types
export type MenuDrawerProps = {
  isOpen: boolean
  onClose: () => void
  direction: "right" | "left" | "top" | "bottom"
  size?: string
}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const MenuDrawer = (props: MenuDrawerProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { isOpen, onClose, direction = "right", size = "250px" } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { pathname } = useRouter()

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

  const items = useMemo(
    () => [
      {
        icon: IoMdHome,
        label: "Início",
        href: "/home"
      },
      {
        icon: IoMdCar,
        label: "Carros",
        href: "/cars"
      },
      {
        icon: IoMdPerson,
        label: "Meu perfil",
        href: "/me"
      }
    ],
    []
  )
  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <ReactModernDrawer
      open={isOpen}
      onClose={onClose}
      direction={direction}
      size={size}
    >
      <S.Container>
        <S.CloseButtonContainer onClick={onClose}>
          <IoMdClose size={20} color="white" />
        </S.CloseButtonContainer>

        <S.MenuItems>
          {items.map((item) => {
            const { icon: Icon, label, href } = item
            const isActive =
              href === "/" ? href === pathname : pathname.includes(href)

            return (
              <Link href={href} key={label}>
                <a>
                  <S.MenuItem isActive={isActive}>
                    <S.MenuItemTitle>{label}</S.MenuItemTitle>
                    <Icon size={32} color="white" />
                  </S.MenuItem>
                </a>
              </Link>
            )
          })}
        </S.MenuItems>
      </S.Container>
    </ReactModernDrawer>
  )
}
