import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Blog from './pages/Blog'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import Details from './pages/Post'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Nav, Navbar, Container } from 'react-bootstrap'
import logo from './components/logo.png'

function App() {
  //При обновлении страницы проверяем наличие знанчения в локальной памяти имени пользователя
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = '/login'
    })
  }

  return (
    <Router>
      <Navbar
        className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"
        sticky="top"
        collapseOnSelecе
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Container id="header_container">
          <Navbar.Brand href="/" className="navbar-brand">
            <img
            alt='logo'
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top me-2 ms-3"
            />
            FAKE NEWS
          </Navbar.Brand>
          {/* Toggle - при уменьшении нашего экрана */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* Collapse - для отображения меню при адаптиве */}
          <Navbar.Collapse
            className="collapse navbar-collapse"
            id="responsive-navbar-nav"
          >
            <Nav className="mr-auto navbar-nav flex-grow-1">
              <Link className="nav-item nav-link" to="/home">
                Home{' '}
              </Link>
              <Link className="nav-item nav-link" to="/blog" target="_blank">
                Blog{' '}
              </Link>

              {!isAuth ? (
                <Link className="nav-item nav-link" to="/login">
                  Login
                </Link>
              ) : (
                <>
                  <Link className="nav-item nav-link" to="/blog/createpost">
                    Create{' '}
                  </Link>
                </>
              )}
            </Nav>
            <Button className="btn btn-primary me-3" onClick={signUserOut}>
              Log out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/blog/:id"
          element={<Details/>}
        />
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog isAuth={isAuth} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blog/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  )
}
export default App
