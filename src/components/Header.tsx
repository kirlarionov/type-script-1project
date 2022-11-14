import { FC } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Logo from "./Logo"

const HeaderContainer = styled.div`
   background-color: lightblue;
   margin-bottom: 15px;
   height: 60px;
`
const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1100px;
   margin: 0 auto;
   height: 100%;
`
const NavLinkItem = styled(NavLink)`
   padding: 4px 7px;
   font-size: 20px;
   color: white;

   &:hover {
      color: #3dadff;
      transition: all 0.3s;
   }

   &.active {
      border-bottom: 1px solid white;
   }
`

const Header: FC = () => {
   return (
      <HeaderContainer>
         <NavContainer>
            <div style={{ display: "flex" }}>
               <NavLinkItem to="/">Home</NavLinkItem>
               <NavLinkItem to="/users">Users</NavLinkItem>
               <NavLinkItem to="/todos">Todos</NavLinkItem>
            </div>
            <div>
               <Logo />
            </div>
         </NavContainer>
      </HeaderContainer>
   )
}

export default Header
