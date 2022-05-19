// Vendors
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from "react"
import { IconType } from "react-icons"
import { HiOutlineEye } from "react-icons/hi"
import { useTheme } from "styled-components"

// Components
import * as S from "./styles"

// Types
export type FieldTextProps = {
  label?: string
  icon?: IconType
  isPassword?: boolean
} & InputHTMLAttributes<HTMLInputElement>

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const FieldTextBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { label, icon: Icon, isPassword, ...inputProps } = props

  /*
  |-----------------------------------------------------------------------------
  | Hooks
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { colors } = useTheme()

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */
  const [type, setType] = useState(isPassword ? "password" : "text")

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
      {Icon && (
        <S.IconContainer>
          {<Icon size={20} color={colors.text} />}
        </S.IconContainer>
      )}

      <S.Content>
        <S.Label htmlFor={props.name}>{label}</S.Label>
        <S.Input type={type} ref={ref} {...inputProps} />
      </S.Content>

      {isPassword && (
        <S.EyeContainer
          onClick={() =>
            setType((previousType) =>
              previousType === "text" ? "password" : "text"
            )
          }
        >
          <HiOutlineEye size={20} color={colors.text} />
        </S.EyeContainer>
      )}
    </S.Container>
  )
}

export const FieldText = forwardRef(FieldTextBase)
