import { FC } from "react"
import typeScriptLogo from "../assets/typescript.svg"

const Logo: FC = () => {
   return (
      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
         <img
            src={typeScriptLogo}
            alt="Type Script Logo"
            style={{ height: "28px", width: "28px" }}
         />
         <h1 style={{ fontSize: "24px", color: "rgb(14, 105, 166)" }}>
            Learning TypeScript
         </h1>
      </div>
   )
}

export default Logo
