import React from 'react'
import {GoogleLogin} from "react-google-login"

const clientId = '301125411462-t5eaa3lp6vv4udferfnr7lt9kc1u8ef7.apps.googleusercontent.com'

const MyGoogleLogin = () => {

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser: ', res.profileObj)
    }

    const onFailure = (res) => {
        console.log('[Login failed] res: ', res)
    }
    

    return (
        <div>
            <GoogleLogin 
                clientId={clientId}
                buttonText="Sign Up with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'http://localhost:8000/'}
                style={{marginTop: '3'}}
                isSignedIn={true}
            />
        </div>
    );
}

export default MyGoogleLogin