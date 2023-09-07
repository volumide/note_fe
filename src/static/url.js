import axios from "axios"

export const baseUrl = "http://localhost:5000/api/v1/"

export const Post = async (url, body) => {
  const token = localStorage.getItem("token")
  const res = await axios.post(baseUrl + `${url}`, body, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  return res.data
}

export const Put = async (url, body) => {
  const token = localStorage.getItem("token")
  const res = await axios.put(baseUrl + `${url}`, body, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  return res.data
}

export const Get = async (url) => {
  const token = localStorage.getItem("token")
  const res = await axios.get(baseUrl + `${url}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  return res.data
}
