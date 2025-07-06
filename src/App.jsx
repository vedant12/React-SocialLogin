import './App.css'
import { GoogleLogin } from '@react-oauth/google'
import FacebookLogin from '@greatsumini/react-facebook-login';
import * as jwt_decode from 'jwt-decode';

function App() {

  const handleSuccess = (credentialResponse) => {
    const decoded = jwt_decode.jwtDecode(credentialResponse.credential);
    console.log(decoded);
  }

  const responseFacebook = (response) => {
    console.log(response);
    // response contains: accessToken, userID, name, email, picture etc.
  };


  const handleError = () => {
    console.log('Login failed');
  }

  return (
    <>
      <h2>Login with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      <FacebookLogin appId='your-fb-app-id' autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </>
  )
}

export default App
