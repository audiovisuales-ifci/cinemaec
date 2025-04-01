import { useEffect, useState } from 'react'
import {
  getAllProjects,
  getProject,
} from '../services/projects'

export const useProjects = () => {
  const [projects, setProjects] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await getAllProjects()
        if (
          response &&
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setProjects(shuffleProjects(response.data))
        } else {
          setProjects([])
        }
      } catch (error) {
        setError(
          error.message || 'Error al cargar proyectos',
        )
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const shuffleProjects = array => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [
        shuffled[j],
        shuffled[i],
      ]
    }
    return shuffled.filter(i => i.public)
  }

  return {
    projects,
    loading,
    error,
  }
}

export const useProject = id => {
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const response = await getProject(id)
        console.log(response)
        if (response && response.data) {
          setProject(response.data)
        } else {
          setProject([])
        }
      } catch (error) {
        setError(
          error.message || 'Error al cargar proyectos',
        )
        setProject([])
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [])

  return {
    project,
    loading,
    error,
  }
}
