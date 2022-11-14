import React, { FC, useRef, useState } from "react"
import styled from "styled-components"

const EventsExampleBlock = styled.div`
   display: flex;
   gap: 20px;
   padding: 15px;
   border: 1px solid gray;
`
const DragAndDropElement = styled.div<DragElementProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 250px;
   height: 150px;
   background: ${({ background }) => background || "#b1ade6"};
   color: white;
   font-size: 20px;
   margin: 15px;
   cursor: pointer;
`
const Button = styled.button`
   padding: 7px 11px;
   border-radius: 7px;
`
const Input = styled.input`
   padding: 7px 11px;
   border: 1px solid blue;
   border-radius: 7px;
   margin: 20px 10px;
`
interface DragElementProps {
   background: string
}

const EventsExample: FC = () => {
   const [value, setValue] = useState<string>("")
   const [isDrag, setIsDrag] = useState<boolean>(false)
   const inputRef = useRef<HTMLInputElement>(null)

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
   }

   const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      alert("Input value: " + inputRef.current?.value)
   }

   const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
      console.log("DRAG")
   }

   const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDrag(true)
      console.log("MOVE")
   }

   const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDrag(false)
   }

   const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDrag(false)
      console.log("DROP")
   }

   return (
      <>
         <EventsExampleBlock>
            <div>
               <DragAndDropElement draggable onDrag={dragHandler} background="">
                  DRAG Block &#129047;
               </DragAndDropElement>
               <DragAndDropElement
                  background={isDrag ? "yellow" : "lightgreen"}
                  onDrop={dropHandler}
                  onDragLeave={leaveHandler}
                  onDragOver={dragWithPreventHandler}>
                  DROP Block
               </DragAndDropElement>
            </div>
            <div>
               <div>
                  <Input
                     type="text"
                     value={value}
                     onChange={changeHandler}
                     placeholder="managed component"
                  />
               </div>
               <div>
                  managed component value: <b>{value}</b>
               </div>
               <Input
                  type="text"
                  ref={inputRef}
                  placeholder="unmanaged component"
               />
               <Button onClick={clickHandler}>button</Button>
            </div>
         </EventsExampleBlock>
      </>
   )
}

export default EventsExample
