import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://book-shelf-app-server.vercel.app/'
})

const useAxiosSecure = () => {
  const { user, setUser, handleLogOut } = useContext(AuthContext)

  axiosInstance.interceptors.request.use(config => {
    config.headers.authorization = `Bearer ${user.accessToken}`
    return config
  })

  axiosInstance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.status === 401 || error.status === 403) {
        handleLogOut()
          .then(() => {
            setUser(null)
          })
          .catch(error => {
            console.log(error)
          })
      }
      return Promise.reject(error)
    }
  )
  return axiosInstance
}

export default useAxiosSecure
