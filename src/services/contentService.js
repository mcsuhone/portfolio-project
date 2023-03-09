import axios from 'axios'
const baseUrl = '/api/content'

const getAll = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export { getAll }