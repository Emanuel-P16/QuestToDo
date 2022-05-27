import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import jwt_decode from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const location = useLocation()
    const googleSuccess = async (res) => {
        const result = jwt_decode(res.credential)
        const profile = { email: result.email, picture: result.picture, google_id: result.sub, user_id: '' }
        localStorage.setItem('profile', JSON.stringify(profile))
        setUser(profile.email)
        window.location.reload();
    }

    const googleFailure = (error) => {
        console.log(error)
    }
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])


    {
        if (user) {
            return (<div>
                <img src={user.picture} alt="Img not found" />
                <button onClick={logout}>
                    Logout
                </button>
            </div>
            )
        } else {
            return (
                <div>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                    />
                </div>
            )
        }
    }


}

export default Navbar