import RotatingText from '../../../../components/RotatingText/RotatingText'
import styles from './Banner.module.css'
import ExplorerBtn from '../../../../components/ExplorerBtn/ExplorerBtn'

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text__container}>
        <h2>Somos</h2>
        <h1 className={styles.rotating__container}>
          <RotatingText
            texts={[
              'Ficción',
              'Documental',
              'Historias',
              'Cine Ecuatoriano',
              'Red de Espacios Audiovisuales',
            ]}
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 400,
            }}
            rotationInterval={3000}
          />
        </h1>
      </div>
      <div className={styles.btn__container}>
        <ExplorerBtn label="Explora" href="#reainfo" />
      </div>
    </div>
  )
}

export default Banner
