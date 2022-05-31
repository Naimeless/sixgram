import { Cookies } from 'react-cookie'

const getCookie = (name) => {
  const cookies = new Cookies()
  return cookies.get(name)
}

export default getCookie
