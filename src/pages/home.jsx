/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import Button from "../component/button"
import { Get, Post, Put } from "../static/url"

const Home = () => {
  const allPost = async () => {
    try {
      const res = await Get("note/all")
      console.log(res)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //? not used yet
  const likePost = async (note_id) => {
    try {
      const res = await Post("note/favorite", { note_id })
      console.log(res)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  //? not used yet
  const unLikePost = async (note_id) => {
    try {
      const res = await Put("note/favorite/remove", { note_id })
      console.log(res)
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
        <textarea></textarea>
        <Button />
      </div>

      <div>
        <span>text area</span>
        <div>
          <a href="#">like</a>
          <a href="#">unlike</a>
        </div>
      </div>
    </div>
  )
}

export default Home
