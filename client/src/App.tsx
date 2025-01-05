import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./views/login"
import AuthorizedRoute from "./components/authorized-route"
import Home from "./views/home"

function App() {
    return (
        <Routes>
            <Route element={
                // <AuthorizedRoute>
                <Outlet />
                // </AuthorizedRoute>
            } path="/">
                <Route element={<Home />} index />
            </Route>

            <Route element={<Login />} path="login" />
        </Routes>
    )
}

export default App
