import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { Card, Row } from 'react-bootstrap'


function Details() {
  const {id} = useParams()

  //Fetch a single doc
  const getPost = doc(db, `blog/${id}`)

  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchPostData = async () => {
      const docSnap = await getDoc(getPost)
      if (docSnap.exists()) {
        const newPostObj = {
          id: docSnap.id,
          title: docSnap.title,
          postText: docSnap.postText
        }
        setPost(newPostObj)
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document')
      }
    }
    fetchPostData()
  }, [])


  console.log(post, "post")
  return (
    <div>
      {post&&
      (<Row className="d-flex justify-content-center">
        <Card
          className="p-5 m-4 bg-light rounded-3 w-50 border-info col-md-6"
          key={post.id}
        >
          <Card.Header className="card-body highlights " key={post.title}>
            <div
              className=" card-text highlights-text col-sm-6 col-md-7 text-left"
              key={post.title}
            >
              <h2>{post.title}</h2>
            </div>
          </Card.Header>
          <Card.Body className="text-left">
            <div className=" card-text discription-text" key={post.postText}>
              <p>{post.postText}</p>
            </div>
          </Card.Body>
        </Card>
      </Row>)

      }
    </div>
  )
}

export default Details
