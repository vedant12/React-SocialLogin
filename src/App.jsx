import './App.css'
import { GoogleLogin } from '@react-oauth/google'
import * as jwt_decode from 'jwt-decode';

function App() {

  const handleSuccess = (credentialResponse) => {
    const decoded = jwt_decode.jwtDecode(credentialResponse.credential);
    console.log(decoded);
  }

  const handleError = () => {
    console.log('Login failed');
  }

  return (
    <>
      <h2>Login with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </>
  )
}

export default App
