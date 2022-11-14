import { FC } from "react"
import styled from "styled-components"
import { IUser } from "../types/types"

const UserItemStyle = styled.div`
   padding: 15px;
   border-bottom: 1px solid gray;
   font-size: 16px;
   cursor: pointer;
   &:hover {
      background-color: lightgray;
      transform: scale(1.009);
      transition: all 0.1s;
   }
`
interface UserItemProps {
   user: IUser
   onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
   return (
      <UserItemStyle onClick={() => onClick(user)}>
         {user.id}. <b>{user.name}</b> lives in city -{" "}
         <b>{user.address.city}</b>, in street - <b>{user.address.street}</b>
      </UserItemStyle>
   )
}

export default UserItem
