import { FC, PropsWithChildren } from "react"

export enum CardVariant {
   outlined = "outlined",
   primary = "primary",
}

interface CardProps {
   width?: string
   height?: string
   variant: CardVariant
   // children: React.ReactNode
}

const Card: FC<PropsWithChildren<CardProps>> = ({
   width,
   height,
   variant,
   children,
}) => {
   return (
      <div
         style={{
            width,
            height,
            border:
               variant === CardVariant.outlined ? "1px gray solid" : "none",
            background: variant === CardVariant.primary ? "lightgray" : "",
            padding: "20px",
            margin: "20px auto"
         }}>
         {children}
      </div>
   )
}

export default Card
