import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const getProject = axios.get({
  baseURL: process.env.REACT_APP_API_URL
})

const createProject = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export {api, getProject, createProject}
