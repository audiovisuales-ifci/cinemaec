import { useState, useRef, useEffect } from 'react'
import styles from './Menu.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

import { menuItems } from '../../../data/menuItems'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeSidebar()
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      )
    }
  }, [])

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
      >
        <button
          onClick={toggleSidebar}
          className={styles.sidebar_toggle}
        >
          {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
        <nav>
          {menuItems.map((item, index) => (
            <div
              className={styles.item_container}
              key={index}
              onClick={closeSidebar}
            >
              {<item.icon />}
              <Link to={item.path}>{item.name}</Link>
            </div>
          ))}
        </nav>
      </aside>
      <div className={styles.sidebar_border} />
    </>
  )
}

export default Menu
