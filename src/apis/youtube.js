import axios from 'axios'

const KEY = 'AIzaSyCprnPXZgcyE1ZuhtsGLM6YsSEvcMW6-V4'

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})

