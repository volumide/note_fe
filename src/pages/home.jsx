/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react"
import Button, { ResetButton } from "../component/button"
import { Get, Post, Put, resetButton } from "../static/url"
import { Link } from "react-router-dom"

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [notes, setNote] = useState("")
  const reset = useRef()
  const allPost = async (reload = true) => {
    if (reload) setLoading(true)
    try {
      const res = await Get("note/all")
      setPosts(res?.body)
    } catch (error) {
      console.log(error?.response?.data)
    } finally {
      setLoading(false)
    }
  }

  const likePost = async (note_id) => {
    try {
      const res = await Post("note/favorite", { note_id })
      console.log(res)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const unLikePost = async (note_id) => {
    try {
      const res = await Put("note/favorite/remove", { note_id })
      console.log(res)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //? not used yet
  const newPost = async (e) => {
    e.preventDefault()
    try {
      const res = await Post("note/create", { note: notes })
      allPost(false)
      resetButton(reset)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(() => {
    allPost()
  }, [])
  return (
    <div>
      <div>
        <form onSubmit={newPost}>
          <textarea name="note" onChange={(e) => setNote(e.target.value)}></textarea>
          <Button name="Post" />
          <ResetButton reference={reset} />
        </form>
      </div>

      <div>
        {loading
          ? "Loading..."
          : posts.map((e) => (
              <div key={e.createdAt}>
                {e.owner.first_name} <br />
                <span>{e.note}</span>
                <div>
                  <span href="#" role="button" onClick={() => likePost(e.id)}>
                    upvote {e.likes}{" "}
                  </span>
                  <span role="button" onClick={() => unLikePost(e.id)}>
                    downvote
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Home
