import { BrowserRouter, Routes, Route } from "react-router-dom"
import UsersPage from "./pages/UsersPage"
import TodosPage from "./pages/TodosPage"
import UserItemPage from "./pages/UserItemPage"
import TodoItemPage from "./pages/TodoItemPage"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"

const App = () => {
   return (
      <BrowserRouter>
         <div style={{ fontFamily: "Nunito, sans-serif" }}>
            <Header />

            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
               <Routes>
                  <Route path={"/"} element={<HomePage />} />
                  <Route path={"/users"} element={<UsersPage />} />
                  <Route path={"/todos"} element={<TodosPage />} />
                  <Route path={"/users/:id"} element={<UserItemPage />} />
                  <Route path={"/todos/:id"} element={<TodoItemPage />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
