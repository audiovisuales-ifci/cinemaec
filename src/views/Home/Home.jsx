import styles from './Home.module.css'
import background from '../../assets/img/background.png'
import ReaInfo from './components/ReaInfo/ReaInfo'
import Cinemaec from './components/Cinemaec/Cinemaec'
import WorkInProgress from './components/WorkInProgress/WorkInProgress'
import Banner from './components/Banner/Banner'
import Button from '../../components/Button/Button'
import SpotlightCard from '../../components/SpotlightCard/SportlightCard'

const Home = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <ReaInfo />
      <Cinemaec />
      <WorkInProgress />
      <div className={styles.cards__container}>
        <SpotlightCard spotlightColor="rgba(228, 20, 20, 0.25)">
          <h3>RODAR EN ECUADOR</h3>
          <p>
            Ecuador es un destino muy atractivo para
            producciones cinematográficas y publicitarias.
          </p>
          <a
            href="https://ecuadorfilmcommission.com/"
            target="__blank"
          >
            <Button label="Visita Ecuador Film Commission" />
          </a>
        </SpotlightCard>
        <SpotlightCard spotlightColor="rgba(230, 26, 26, 0.25)">
          <h3>REGISTRA TU PROYETO</h3>
          <p>
            Registra tu proyecto en desarrollo en nuestro
            catálogo Work In Progress.
          </p>
          <a
            href="https://ecuadorfilmcommission.com/system"
            target="__blank"
          >
            <Button label="Registra tu proyecto" />
          </a>
        </SpotlightCard>
        <SpotlightCard spotlightColor="rgba(238, 10, 10, 0.25)">
          <h3>Agrega tu obra</h3>
          <p>
            Quieres que tu película esté en el catálogo de
            cine ecuatoriano, escríbenos.
          </p>
          <a
            href="mailto:audiovisuales.ifci@creatividad.gob.ec"
            target="__blank"
          >
            <Button label="Envíanos un mensaje" />
          </a>
        </SpotlightCard>
      </div>

      <div className={styles.background}>
        <img src={background} />
      </div>
    </div>
  )
}

export default Home
