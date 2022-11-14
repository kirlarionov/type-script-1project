import { FC } from "react"
import { ITodo } from "../types/types"
import styled from "styled-components"

const TodoItemBox = styled.div`
   display: flex;
   gap: 12px;
   padding: 10px 15px;
   font-size: 18px;
   line-height: 24px;
   cursor: pointer;
   border-bottom: 1px solid gray;
   &:hover {
      background-color: #cfe;
      transition: all 0.1s;
   }
`
const TodoText = styled.div`
   &:hover {
      transform: scale(1.04);
   }
`
interface TodoItemProps {
   todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
   return (
      <TodoItemBox>
         <input type="checkbox" checked={todo.completed} onChange={() => {}} />
         <TodoText>
            {todo.id}. {todo.title}
         </TodoText>
      </TodoItemBox>
   )
}

export default TodoItem
