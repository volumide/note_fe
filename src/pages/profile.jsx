/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react"
import { Delete, Get, Post, Put, resetButton } from "../static/url"
import Box from "../component/box"
import Button from "../component/button"
import { Link, useParams } from "react-router-dom"

const Profile = () => {
  const [data, setData] = useState({})
  const [notes, setNotes] = useState([])
  const [tab, setTab] = useState("notes")
  const [prOb, setPrOb] = useState({})
  const [follower, setFollowers] = useState([])
  const [psOb, setPsOb] = useState({})
  const params = useParams()

  let profile = JSON.parse(localStorage.getItem("pr"))
  const reset = useRef(null)

  const handleInput = (e, fm = false) => {
    if (!fm) setPrOb({ ...prOb, [e.target.name]: e.target.value })
    if (fm) setPsOb({ ...prOb, [e.target.name]: e.target.value })
  }

  const personalPosts = async () => {
    try {
      const res = await Get("note/user")
      setNotes(res.body)
    } catch (error) {
      console.log(error)
    }
  }

  const removePost = async (id) => {
    try {
      const res = await Delete(`note/delete/${id}`)
      personalPosts()
    } catch (error) {
      console.log(error)
    }
  }

  const followers = async () => {
    try {
      const res = await Get("followers")
      setFollowers(res.body)
    } catch (error) {
      console.log(error)
    }
  }

  const follow = async (id) => {
    try {
      const res = await Post("follow", { user_id: id })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const unfollow = async (id) => {
    try {
      const res = await Post("unfollow", { user_id: id })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const updateProfile = async () => {
    try {
      const res = await Put("update/profile", data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const updatePassword = async () => {
    try {
      const res = await Put("update/profile", data)
      console.log(res)
      resetButton(reset)
    } catch (error) {
      console.log(error)
    }
  }

  const switchTab = (value) => () => setTab(value)

  useEffect(() => {
    if (!params.id) {
      personalPosts()
      followers()
    }
  }, [])

  return (
    <div>
      {params.id ? (
        <div>hello there</div>
      ) : (
        <>
          <div>
            {profile.first_name} {profile.last_name}
          </div>
          {followers.length} folllower(s)
          <div className="tab">
            <span role="button" onClick={switchTab("notes")}>
              posts
            </span>
            <span role="button" onClick={switchTab("profile")}>
              profile
            </span>
            <span role="button" onClick={switchTab("password")}>
              password
            </span>
          </div>
          {tab === "notes" ? (
            <div className="notes">
              {notes.map((e) => (
                <div key={e.createdAt}>
                  {/* {e.owner.first_name} <br /> */}
                  <span>{e.note}</span>
                  <div>
                    <span>{e.likes}</span>
                    <span role="button" onClick={() => removePost(e.id)}>
                      delete
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
          {tab === "profile" ? (
            <div>
              <form onChange={updateProfile}>
                <Box name="first_name" defaultValue={profile?.first_name} label="First name" onChange={(e) => handleInput(e)} />
                <Box name="last_name" defaultValue={profile?.last_name} label="Last name" onChange={(e) => handleInput(e)} />
                <Box name="phone" type="number" defaultValue={profile?.phone} label="Phone" onChange={(e) => handleInput(e)} />
                <Box name="email" defaultValue={profile?.email} label="Email" disabled />
                <Button name="Update" />
              </form>
            </div>
          ) : (
            ""
          )}
          {tab === "password" ? (
            <div>
              <form onChange={updatePassword}>
                <Box name="password" label="Old password" onChange={(e) => handleInput(e, true)} />
                <Box name="newPassword" label="New password" onChange={(e) => handleInput(e, true)} />
                <Button name="Update" />
                <button type="reset" ref={reset} disabled>
                  reset
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  )
}

export default Profile
