// Vendors

// Components
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { FaInstagram, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa"

import * as S from "./styles"

// Types
export type FooterProps = {}

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const Footer = (props: FooterProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const {} = props

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

  const links = useMemo(
    () => [
      {
        href: "/home",
        label: "Início"
      },
      {
        href: "/cars",
        label: "Carros"
      },
      {
        href: "/me",
        label: "Meu perfil"
      },
      {
        href: "/login",
        label: "Login"
      },
      {
        href: "/register",
        label: "Cadastre-se"
      }
    ],
    []
  )

  const socialNetworks = useMemo(
    () => [
      {
        label: "instagram",
        icon: FaInstagram,
        href: "https://www.instagram.com/lui7henrique/"
      },
      {
        label: "twitter",
        icon: FaTwitterSquare,
        href: "https://twitter.com/lui7henrique"
      },
      {
        label: "linkedin",
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/luiz-henrique7/"
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
    <S.Container>
      <S.Content>
        <S.Infos>
          <Image
            src="/logotipo.svg"
            width="200px"
            height="22px"
            alt="logotipo"
          />
          <S.Copyright>&#169; 2022 | Todos direitos reservados.</S.Copyright>

          <S.SocialNetworks>
            {socialNetworks.map((socialNetwork) => {
              const { href, icon: Icon } = socialNetwork

              return (
                <Link href={href} key={href} passHref>
                  <S.SocialNetwork target="blank">
                    <Icon size={30} color="white" />
                  </S.SocialNetwork>
                </Link>
              )
            })}
          </S.SocialNetworks>
        </S.Infos>

        <S.Links>
          {links.map((link) => {
            const { href, label } = link

            const isActive =
              href === "/" ? href === pathname : pathname.includes(href)

            return (
              <Link href={href} key={label} passHref>
                <S.Link isActive={isActive}>{label}</S.Link>
              </Link>
            )
          })}
        </S.Links>
      </S.Content>
    </S.Container>
  )
}
