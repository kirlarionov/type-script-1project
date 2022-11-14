import { FC, PropsWithChildren } from "react"
import styled from "styled-components"

const PageTitleBox = styled.div`
   text-align: center;
   font-size: 26px;
   font-weight: 600;
   padding: 15px;
   color: rgb(14, 105, 166);
`

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
   return <PageTitleBox>{children}</PageTitleBox>
}

export default PageTitle
