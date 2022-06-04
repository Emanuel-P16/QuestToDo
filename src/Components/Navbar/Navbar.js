import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { NavbarStyle, NavbarButtonStyle, NavBarSeparatorStyle,NavBarUserDivStyle,NavBarUserImgStyle} from "../../styled-components";
import jwt_decode from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google';
import { QuestContext } from "../../context/QuestContext";


const Navbar = () => {
    const {user,setUser} = useContext(QuestContext)
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
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


    
        if (user) {
            return (<NavbarStyle>
                <NavBarSeparatorStyle>
                    <h2>Lifequest</h2>
                    <NavBarUserDivStyle>
                        <NavBarUserImgStyle src={user.picture} alt="Img not found" />
                        <NavbarButtonStyle onClick={logout}>
                            Logout
                        </NavbarButtonStyle>
                    </NavBarUserDivStyle>
                </NavBarSeparatorStyle>
            </NavbarStyle>
            )
        } else {
            return (
                <NavbarStyle>
                    <NavBarSeparatorStyle>
                    <h2>Lifequest</h2>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleFailure}
                    />
                    </NavBarSeparatorStyle>
                </NavbarStyle>
            )
        }
    


}

export default Navbar