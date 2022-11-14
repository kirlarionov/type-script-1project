import { FC, PropsWithChildren } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const ButtonStyle = styled.button`
   border: 1px solid lightgray;
   padding: 8px 11px;
   margin: 10px;
   border-radius: 7px;
   background-color: #55c7ff;
   color: white;
   &:hover {
      background-color: #1fa6e8;
   }
`
interface ButtonProps {
   href: string
}

const BackButton: FC<PropsWithChildren<ButtonProps>> = ({ children, href }) => {
   const navigate = useNavigate()

   const backToHome = () => {
      navigate(href)
   }

   return <ButtonStyle onClick={backToHome}>{children}</ButtonStyle>
}

export default BackButton
