// Hooks
import { useUser } from "@/hooks/useUser";
import Login from "@/pages/Login";

export const PrivateRoute = ({children}) => {

    const {user} = useUser();

    return user ?   
                    children
                :
                    <>
                        <br />
                        <br />
                        <br />
                        <h1>No estás logeada</h1> 
                        <br />
                        <br />
                        <br />
                        <Login />
                    </>
}