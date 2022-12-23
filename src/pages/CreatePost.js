import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db, auth } from '../firebase-config'
import { Container, Row, Button, Card } from 'react-bootstrap'

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState()
  const [postText, setPostText] = useState()

  const postCollectionRef = collection(db, 'posts')
  let navigate = useNavigate()
  const createPost = async () => {
    // после авторизации можно вытаскивать имя атовра
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    })
    navigate('/blog')
  }

  return (
    <Container className="loginpage text-center mw-50">
      <Row>
        <Card className="card w-50 position-absolute top-50 start-50 translate-middle border border-primary">
          <h1 className="mt-3 pb-3"> Create a post here</h1>
          <form className="mt-3 pb-3 m-3">
            <div className="form-group has-error">
              <input
                className="form-control mb-3"
                id="title"
                placeholder="Title..."
                onChange={(event) => {
                  setTitle(event.target.value)
                }}
              />

              <div className="inputGp">
                <textarea
                  id="description"
                  rows="5"
                  className="form-control mb-3 mt-3"
                  placeholder="Post..."
                  onChange={(event) => {
                    setPostText(event.target.value)
                  }}
                />
              </div>
              <Button className="btn btn-primary mb-3 mt-3" onClick={createPost}>
                Submit post
              </Button>
            </div>
          </form>
        </Card>
      </Row>
    </Container>
  )
}

export default CreatePost
