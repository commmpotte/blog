import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import React, {useState, useEffect } from 'react'
import { Card} from 'react-bootstrap'
import { db, auth } from '../firebase-config'
// import { Link } from 'react-router-dom'

function Blog({ isAuth }) {
  const [postList, setPostList] = useState([])
  const postCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  })

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc)
  }

  return (
    <div className="homePage">
      { postList.map((post) => {
        return (
          <div className="container">
            <div className="row">
              <Card className="m-3 p-0" key={post.uniqueId}>
                <Card.Body>
                <div className="post">
                  <div className="postHeader">
                    <div className="title">
                      <h1> {post.title}</h1>
                    </div>
                  </div>
                  <div className="postTextContainer">{post.postText}</div>
                </div>
                </Card.Body>
                <Card.Footer className="footer">
                  <div className='row'>
                  <h4 className="col-md-11 ps-3"> @{post.author.name} </h4>
                  {/* <Link to={`/blog/${post.id}`}>
                    <button className="btn btn-info me-3">More</button>
                  </Link> */}
                  <div className="deletePost col-md-1 text-center fs-5">
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <button
                        className="border border-0 bg-light"
                        onClick={() => {
                          deletePost(post.id)
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    )}
                  </div>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Blog

// У меня к сожалению не получилось сделать так, чтобы при клике на пост он 
// открывался в отдельном окне со своим id. Пробовал решить 
// задачу с учетом формирования уникального id, вытаскивая из свойства 
// в firebase. Но все время получал undefined. Также пробовал сделать по 
// хитрому, чтобы был некое подобие клона страницы с постами, только 
// выгружался лишь нужный мне. Но к сожалению, не вышло. Прошу помощи в виде 
// намека на то, как можно выйти из этой ситуации. Спасибо!
