import { useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const axiosSecure = axios.create({
  baseURL: 'https://book-shelf-app-server.vercel.app/'
})

const useAxiosSecure = () => {
  const { user, setUser, handleLogOut } = useContext(AuthContext)

  useEffect(() => {
   
    const requestInterceptor = axiosSecure.interceptors.request.use(config => {
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`
      }
      return config
    })

   
    const responseInterceptor = axiosSecure.interceptors.response.use(
      response => response,
      error => {
        const status = error?.response?.status
        if (status === 401 || status === 403) {
          handleLogOut()
            .then(() => setUser(null))
            .catch(err => console.error('Logout failed:', err))
        }
        return Promise.reject(error)
      }
    )


    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor)
      axiosSecure.interceptors.response.eject(responseInterceptor)
    }
  }, [user?.accessToken, handleLogOut, setUser])

  return axiosSecure
}

export default useAxiosSecure

