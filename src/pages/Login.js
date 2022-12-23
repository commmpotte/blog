import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import logo from '../components/logo.png'
import { Container, Button} from 'react-bootstrap'

function Login({ setIsAuth }) {
  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      //Проверяем, залогинены мы или нет
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      //С помощью navigate можно отправить юзера туда, куда нам нужно
      navigate('/')
    })
  }

  return (
    <Container>
      <div className="loginpage text-center" data-ocrext-dialog="1">
        <form className="form-signin">
          <img className="mb-4 mt-4" src={logo} height="70" width="70" alt='logo'/>
          <h1 className="h3 mb-3 font-weight-normal">
            Sign in here with google
          </h1>
          <Button onClick={signInWithGoogle}>Sign in with google</Button>
        </form>
      </div>
    </Container>
  )
}
export default Login
