import { useContext } from "react"
import Usercontext from "../context/userContext"

const Profile = () => {

    const { user } = useContext(Usercontext)

    if(!user) return <div>Please log in</div>

    return <div>Welcome: {user.username}</div>
}

export default Profile