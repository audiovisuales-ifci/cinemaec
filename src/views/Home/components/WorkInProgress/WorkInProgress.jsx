import styles from './WorkInProgress.module.css'
import GridDistortion from '../../../../components/GridDistortion/GridDistortion'
import bannerImg from '/src/assets/img/filmmaker.jpg'
import Button from '/src/components/Button/Button'
import { Fade } from 'react-awesome-reveal'
import { useNavigate } from 'react-router-dom'

const WorkInProgress = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <h1>WORK IN PROGRESS</h1>
      <div className={styles.banner}>
        <GridDistortion
          imageSrc={bannerImg}
          grid={20}
          mouse={0.35}
          strength={0.35}
          relaxation={0.9}
          className={styles.distortion}
        />
      </div>
      <Fade className={styles.content}>
        <p>
          Este catálogo de películas Work in Progress ofrece
          una mirada exclusiva a proyectos cinematográficos
          en desarrollo, obras que están tomando forma y que
          prometen dejar huella en el panorama audiovisual.
        </p>
        <p>
          Aquí se encuentran historias en construcción,
          visiones únicas y propuestas audaces que reflejan
          la diversidad de miradas y talentos emergentes.
        </p>
        <Button
          label="Explora proyectos en construcción"
          onClick={() => navigate('/projects')}
        />
      </Fade>
    </div>
  )
}

export default WorkInProgress
