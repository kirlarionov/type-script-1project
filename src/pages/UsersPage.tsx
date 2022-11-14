import { FC, useState, useEffect } from "react"
import axios from "axios"
import { IUser } from "../types/types"
import List from "../components/List"
import UserItem from "../components/UserItem"
import { useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton"
import PageTitle from "../components/PageTitle"

const UsersPage: FC = () => {
   const [users, setUsers] = useState<IUser[]>([])
   const navigate = useNavigate()

   useEffect(() => {
      fetchUsers()
   }, [])

   async function fetchUsers(): Promise<void> {
      try {
         const responce = await axios.get<IUser[]>(
            "https://jsonplaceholder.typicode.com/users"
         )
         setUsers(responce.data)
      } catch (error) {
         alert(error)
      }
   }

   return (
      <>
         <PageTitle>Users Page</PageTitle>
         <List
            items={users}
            renderItem={(user: IUser) => (
               <UserItem
                  key={user.id}
                  user={user}
                  onClick={(user) =>
                     navigate("/type-script-1project/users/" + user.id)
                  }
               />
            )}
         />
         <BackButton href={"/type-script-1project/home"}>
            &#129044; Back to HOME
         </BackButton>
      </>
   )
}

export default UsersPage
