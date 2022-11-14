import { FC } from "react"
import Card, { CardVariant } from "../components/Card"
import EventsExample from "../components/EventsExample"
import PageTitle from "../components/PageTitle"

const HomePage: FC = () => {
   return (
      <div>
         <PageTitle>Home Page (examples of components on TypeScript)</PageTitle>
         <EventsExample />
         <Card variant={CardVariant.primary} width="300px" height="100px">
            CARD VARIANT
         </Card>
      </div>
   )
}

export default HomePage
