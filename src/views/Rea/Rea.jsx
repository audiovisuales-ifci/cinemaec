import React from 'react'
import Section from '../../components/Section'
import About from './components/About'
import styles from './Rea.module.css'
import Benefits from './components/Benefits'
import videoURL from '../../assets/videos/introREA.mp4'
import { Fade } from 'react-awesome-reveal'

const Rea = () => {
  return (
    <>
      <Section id="rea">
        <main className={styles.rea}>
          <video
            className={styles.video}
            autoPlay
            loop
            muted
            controls
          >
            <source src={videoURL} type="video/mp4" />
            Su navegador no soporta video
          </video>

          <Fade cascade className={styles.parrafo}>
            <h1>RED DE ESPACIOS AUDIOVISUALES</h1>
            <p>
              La Red de Espacios Audiovisuales -REA- es una
              iniciativa que conecta espacios alternativos
              de exhibición cinematográfica, tanto privados
              como públicos, para ofrecer a la ciudadanía
              acceso a una programación diversa y de
              calidad. Esta red se presenta como una
              alternativa innovadora al circuito comercial
              de cine, promoviendo el uso de infraestructura
              cultural y fortaleciendo la colaboración entre
              gestores y usuarios del Banco de Contenidos.
            </p>
          </Fade>
        </main>
      </Section>
      <About />
      <Benefits />
    </>
  )
}

export default Rea
