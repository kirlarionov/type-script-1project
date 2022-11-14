import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./nullstyle.css"
import UsersPage from "./pages/UsersPage"
import TodosPage from "./pages/TodosPage"
import UserItemPage from "./pages/UserItemPage"
import TodoItemPage from "./pages/TodoItemPage"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import StartPage from "./pages/StartPage"

const App = () => {
   return (
      <BrowserRouter>
         <div style={{ fontFamily: "Nunito, sans-serif" }}>
            <Header />

            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
               <Routes>
                  <Route
                     path={"/type-script-1project/home"}
                     element={<HomePage />}
                  />
                  <Route
                     path={"/type-script-1project"}
                     element={<StartPage />}
                  />
                  <Route
                     path={"/type-script-1project/users"}
                     element={<UsersPage />}
                  />
                  <Route
                     path={"/type-script-1project/todos"}
                     element={<TodosPage />}
                  />
                  <Route
                     path={"/type-script-1project/users/:id"}
                     element={<UserItemPage />}
                  />
                  <Route
                     path={"/type-script-1project/todos/:id"}
                     element={<TodoItemPage />}
                  />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
