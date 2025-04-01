import { useNavigate } from 'react-router-dom'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()
  console.log(project)
  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <p className={styles.name}>{project.name}</p>
      <p>{project.genre}</p>
      <p className={styles.director}>{project.director}</p>
      <p className={styles.sinopsis}>{project.sinopsis}</p>
      <div className={styles.situation}>
        <p>{project.currentSituation}</p>
      </div>
    </div>
  )
}

export default ProjectCard
