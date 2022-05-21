// Vendors
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState
} from "react"
import { FieldError } from "react-hook-form"
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
  error?: FieldError
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
  const { label, icon: Icon, isPassword, error, ...inputProps } = props

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
    <S.FieldContainer>
      <S.InputContainer error={!!error}>
        {Icon && (
          <S.IconContainer error={!!error}>
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
      </S.InputContainer>

      {error?.message && <S.FieldError>{error.message}</S.FieldError>}
    </S.FieldContainer>
  )
}

export const FieldText = forwardRef(FieldTextBase)
