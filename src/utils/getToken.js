import getCookie from './getCookie'

const getToken = () => {
  return getCookie('token')
}

export default getToken
