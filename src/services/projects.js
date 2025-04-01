import axios from 'axios'
const baseURI = import.meta.env
  .VITE_BACKEND_FILMCOMMISSION_URI

export const getAllProjects = async () => {
  const res = await axios.get(`${baseURI}/projects`)
  return res.data
}

export const getProject = async id => {
  const res = await axios.get(`${baseURI}/projects/${id}`)
  return res.data
}
