import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== true) {
            navigate("/login", { 
                state: { message: "Please log in to access this feature" }
            })
        } else if(!authentication && authStatus === true) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    if(loader) {
        return <div className="w-full h-screen flex justify-center items-center">
            <h1>Loading...</h1>
        </div>
    }

    return <>{children}</>
}

Protected.propTypes = {
    children: PropTypes.node,
    authentication: PropTypes.bool
}

