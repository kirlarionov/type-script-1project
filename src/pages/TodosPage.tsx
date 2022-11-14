import { FC, useState, useEffect } from "react"
import axios from "axios"
import { ITodo } from "../types/types"
import List from "../components/List"
import TodoItem from "../components/TodoItem"
import PageTitle from "../components/PageTitle"
import BackButton from "../components/BackButton"

const TodosPage: FC = () => {
   const [todos, setTodos] = useState<ITodo[]>([])

   useEffect(() => {
      fetchTodos()
   }, [])

   async function fetchTodos(): Promise<void> {
      try {
         const responce = await axios.get<ITodo[]>(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
         )
         setTodos(responce.data)
      } catch (error) {
         alert(error)
      }
   }

   return (
      <>
         <PageTitle>Todos Page</PageTitle>
         <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
         />
         <BackButton href={"/type-script-1project/home"}>
            &#129044; Back to HOME
         </BackButton>
      </>
   )
}

export default TodosPage
