import { useDispatch } from 'react-redux'
import styles from './ProjectsCataloge.module.css'
import ProjectCard from './components/ProjectCard'
import AnimatedGrid from '../../components/AnimatedGrid/AnimatedGrid'
import { useProjects } from '../../hooks/useProjects'
import { setLoader } from '../../redux/loader.reducer'
import { useEffect } from 'react'

const ProjectsCataloge = () => {
  const dispatch = useDispatch()
  const { projects, loading, error } = useProjects()

  useEffect(() => {
    dispatch(setLoader(loading))
  }, [loading, dispatch])

  if (loading) {
    return null
  }

  if (error) {
    return <p className={styles.error}>{error}</p>
  }

  if (!projects || projects.length === 0) {
    return (
      <p className={styles.empty}>
        No hay proyectos disponibles
      </p>
    )
  }

  return (
    <div className={styles.container}>
      <h2>Working Projects</h2>
      <div className={styles.cards__container}>
        {projects.map(project => (
          <ProjectCard
            key={project.id || project._id}
            project={project}
          />
        ))}
      </div>
      <AnimatedGrid />
    </div>
  )
}

export default ProjectsCataloge
