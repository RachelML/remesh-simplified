import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

const createConversation = async (data) => {
    const resp = await api.post('/conversations', { conversation: data })
    return resp.data
  }

  const readAllConversations = async () => {
    const resp = await api.get('/conversations')
    return resp.data
  }

  export {
    createConversation,
    readAllConversations
   
  }
  