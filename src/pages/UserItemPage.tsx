import { FC, useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { IUser } from "../types/types"
import BackButton from "../components/BackButton"

const UserBlockStyle = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
   font-size: 18px;
   margin-bottom: 20px;
   & h1 {
      font-size: 20px;
      font-weight: 600;
   }
`

type UserItemPageParams = {
   id: string
}

const UserItemPage: FC = () => {
   const [user, setUser] = useState<IUser | null>(null)
   const { id } = useParams<UserItemPageParams>()

   const fetchUser = useCallback(async (): Promise<void> => {
      try {
         const responce = await axios.get<IUser>(
            "https://jsonplaceholder.typicode.com/users/" + id
         )
         setUser(responce.data)
      } catch (error) {
         alert(error)
      }
   }, [id])

   useEffect(() => {
      fetchUser()
   }, [fetchUser])

   return (
      <>
         <UserBlockStyle>
            <h1>{user?.name}</h1>
            <h3>{user?.email}</h3>
            <h3>{user?.phone}</h3>
            <h3>
               {user?.address.city}, {user?.address.street},{" "}
               {user?.address.zipcode}
            </h3>
            <h3>{user?.website}</h3>
         </UserBlockStyle>
         <BackButton href={"/users"}>&#129044; Back to USERS</BackButton>
      </>
   )
}

export default UserItemPage
