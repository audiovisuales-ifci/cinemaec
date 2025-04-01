import GridMotion from '/src/components/GridMotion/GridMotion'
import styles from './Cinemaec.module.css'
import { Fade } from 'react-awesome-reveal'
import Button from '/src/components/Button/Button'
import { useNavigate } from 'react-router-dom'

const items = [
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FMejor_no_hablar_(de_ciertas_cosas)%2Fstills_1731966162528.webp?alt=media&token=36004c5b-084d-4e94-91f5-f4ff156eb6fc',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FAlba%2Fstills_1727289465578.webp?alt=media&token=8903ee4c-55db-42be-b7b4-fd43d7039cd7',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FEl_Invento_de_la_Soledad%2Fstills_1725975278405.jpg?alt=media&token=22eba313-e6ca-4da5-9a68-039e0454a6fa',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FSumergible%2Fstills_1726605150946.jpg?alt=media&token=04f4dc15-3ee0-4227-8515-7f06294d1c19',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FTan_distintos%2Fstills_1726694437404.webp?alt=media&token=68f04a1b-93da-4fbb-8de1-9e60193bc93d',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FTayos%2C_El_Ministerio__del_Mundo_Intraterrestre%2Fstills_1727989224110.webp?alt=media&token=ce306d50-3fa5-45a4-8ae8-a0613dc2b2bd',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FLa_Mala_Noche%2Fstills_1726849158174.webp?alt=media&token=ee92f0d5-1a16-41c5-9287-fefc1e8f09e9',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FSi_yo_muero_primero%2Fstills_1727473859821.webp?alt=media&token=fa0b351a-9a09-474c-a60a-20eb99c7466d',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FLo_Invisible%2Fstills_1728080089752.jpeg?alt=media&token=9a5d3286-56d0-42bf-b103-25d851f895dc',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FTayos%2C_El_Ministerio__del_Mundo_Intraterrestre%2Fstills_1727989224110.webp?alt=media&token=ce306d50-3fa5-45a4-8ae8-a0613dc2b2bd',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FTorero%2Fstills_1726797366533.jpg?alt=media&token=a6887d0b-19d5-4ab7-9c97-1b3b2c7ae23a',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FPescador%2Fstills_1731704576822.webp?alt=media&token=d3c3edad-3d1b-48e5-820a-d2ae0cc70841',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FSumergible%2Fstills_1726605150946.jpg?alt=media&token=04f4dc15-3ee0-4227-8515-7f06294d1c19',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FLa_Mala_Noche%2Fstills_1726849158174.webp?alt=media&token=ee92f0d5-1a16-41c5-9287-fefc1e8f09e9',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FMejor_no_hablar_(de_ciertas_cosas)%2Fstills_1731966162528.webp?alt=media&token=36004c5b-084d-4e94-91f5-f4ff156eb6fc',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FEl_Invento_de_la_Soledad%2Fstills_1725975278405.jpg?alt=media&token=22eba313-e6ca-4da5-9a68-039e0454a6fa',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FLa_Mala_Noche%2Fstills_1726849158174.webp?alt=media&token=ee92f0d5-1a16-41c5-9287-fefc1e8f09e9',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FSi_yo_muero_primero%2Fstills_1727473859821.webp?alt=media&token=fa0b351a-9a09-474c-a60a-20eb99c7466d',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FLo_Invisible%2Fstills_1728080089752.jpeg?alt=media&token=9a5d3286-56d0-42bf-b103-25d851f895dc',
  'https://firebasestorage.googleapis.com/v0/b/cinemaec-fc79d.appspot.com/o/cinemaec%2FTorero%2Fstills_1726797366533.jpg?alt=media&token=a6887d0b-19d5-4ab7-9c97-1b3b2c7ae23a',
]

const Cinemaec = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.section}>
      <h1>CINE ECUATORIANO</h1>
      <div className={styles.container}>
        <GridMotion items={items} />
      </div>
      <Fade cascade className={styles.content}>
        <p>
          El cine ecuatoriano ha experimentado un notable
          crecimiento en las últimas décadas, consolidándose
          como una voz única y auténtica en el panorama
          audiovisual latinoamericano. Con historias que
          reflejan una mirada íntima y profunda a la
          realidad del Ecuador
        </p>
        <p>
          Desde producciones independientes hasta
          largometrajes que han ganado reconocimiento
          internacional, el cine ecuatoriano sigue
          abriéndose paso con creatividad, pasión y un
          compromiso firme por contar historias que resuenen
          tanto local como globalmente.
        </p>
        <p>
          Este catálogo es una ventana a ese universo
          cinematográfico en constante evolución.
        </p>
        <Button
          label="catálogo de cine ecuatoriano"
          onClick={() => navigate('cataloge')}
        />
      </Fade>
    </div>
  )
}

export default Cinemaec
