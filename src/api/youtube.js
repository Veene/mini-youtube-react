import axios from 'axios'

const KEY = 'AIzaSyDKu9U3LaJuDTEnKBKX27CupTwSVT4JejA'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: '5',
    part: 'snippet',
    key: KEY
  }
})
	