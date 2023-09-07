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
      //   console.log(res)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const unLikePost = async (note_id) => {
    try {
      const res = await Put("note/favorite/remove", { note_id })
      //   console.log(res)
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
    <div className="w-2/5 mx-auto my-2 mb-10">
      <div className="my-3 sticky top-2">
        <form onSubmit={newPost} className="flex items-center flex-col w-full">
          <textarea name="note" placeholder="write a public note..." className="bg-gray-100 p-2 rounded-[8px] w-full outline-none" onChange={(e) => setNote(e.target.value)}></textarea>
          <Button name={<i className="fa-solid fa-paper-plane" />} cls="w-full bg-transaparent" />
          <ResetButton reference={reset} />
        </form>
      </div>
      <div>
        {loading
          ? "Loading..."
          : posts.map((e) => (
              <div key={e.createdAt} className="bg-gray-50 my-2 p-2 rounded-5">
                <span className="lowercase text-sm block mb-1">@{e.owner.first_name} </span>
                <span className="font-medium">{e.note}</span>
                <div className="mt-1 flex gap-5">
                  <span role="button" onClick={() => likePost(e.id)}>
                    <i className="fa-regular fa-thumbs-up mr-2" />
                    {e.likes}{" "}
                  </span>
                  <span role="button" onClick={() => unLikePost(e.id)}>
                    <i className="fa-regular fa-thumbs-down" />
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Home
