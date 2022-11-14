import { FC } from "react"
import styled from "styled-components"
import BackButton from "../components/BackButton"
import TSlogo from "../assets/ts-logo-round-128.png"

const StartPageStyle = styled.div`
   margin: 30px;
   background-color: #fcff94;
   height: 300px;
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 28px;
   font-weight: 600;
   color: rgb(14, 105, 166);
   border: 4px solid lightblue;
   text-align: center;
   & div h3 {
      margin: 25px 0 15px;
      font-size: 24px;
      line-height: 30px;
   }
`
const WelcomeTextBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`

const StartPage: FC = () => {
   return (
      <StartPageStyle>
         <div>
            <WelcomeTextBox>
               <h1>Welcome to Learning TypeScript App 👋</h1>
               <img src={TSlogo} alt="type script logo" width={36} />
            </WelcomeTextBox>
            <h3>
               A simple application in which I learned about TypeScript and
               practiced typing components, objects, and functions, etc.
            </h3>
            <BackButton href="/type-script-1project/home">
               Getting Started
            </BackButton>
         </div>
      </StartPageStyle>
   )
}

export default StartPage
