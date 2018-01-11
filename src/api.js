import axios from 'axios';

const api = axios.create({
  baseURL: 'https://els-api.herokuapp.com/'
})

export {api}
