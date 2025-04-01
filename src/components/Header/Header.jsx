import styles from './Header.module.css'
import Menu from './components/Menu'

const Header = () => {
  return (
    <header className={styles.Header}>
      <a href="/">
        <img
          className={styles.logo}
          src="/assets/icons/rea_logo_w.png"
          alt="REA"
        />
      </a>
      <a
        href="https://www.creatividad.gob.ec"
        target="_blank"
      >
        <img
          className={styles.logo__ifci}
          src="/assets/icons/logo_ifci.png"
          alt="IFCI"
        />
      </a>
      <Menu />
    </header>
  )
}

export default Header
