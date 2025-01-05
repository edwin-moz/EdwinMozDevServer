import { Navigate } from "react-router-dom";
import { useAuthContext } from "../lib/hooks";

export default function AuthorizedRoute({ children }) {
    const { user } = useAuthContext()

    console.log(user)

    return user === null ? <Navigate to="/login" /> : children
}
