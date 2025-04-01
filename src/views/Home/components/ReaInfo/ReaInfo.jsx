import { Fade } from 'react-awesome-reveal'
import styles from './ReaInfo.module.css'
import backgroundImg from '/src/assets/img/cinema1.jpg'
import SimpleParallax from 'simple-parallax-js'
import Button from '/src/components/Button/Button'
import { useNavigate } from 'react-router-dom'

const ReaInfo = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container} id="reainfo">
      <div className={styles.background}>
        <SimpleParallax>
          <img src={backgroundImg} />
        </SimpleParallax>
      </div>
      <Fade cascade delay={300} className={styles.content}>
        <h1>RED DE ESPACIOS AUDIOVISUALES</h1>
        <p>
          La Red de Espacios Audiovisuales es una iniciativa
          clave para el desarrollo y fortalecimiento de la
          industria cinematográfica y cultural en Ecuador.
        </p>
        <p>
          Esta red agrupa a salas de cine, centros
          culturales y espacios alternativos dedicados a la
          proyección y difusión de obras audiovisuales.
        </p>
        <p>
          Su objetivo principal es democratizar el acceso al
          cine, llevando historias y producciones a
          comunidades de todo el país, incluso a aquellas
          que tradicionalmente han estado alejadas de los
          circuitos comerciales. Además de fomentar la
          formación de públicos, promover la diversidad
          cultural y apoya la exhibición de cine
          ecuatoriano.
        </p>
        <Button
          label="únete a la REA"
          onClick={() => navigate('/rea')}
          btnStyle="primary"
        />
      </Fade>
    </div>
  )
}

export default ReaInfo
