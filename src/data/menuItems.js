import CollectionsIcon from '@mui/icons-material/Collections'
import HomeIcon from '@mui/icons-material/Home'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

export const menuItems = [
  {
    name: 'Inicio',
    path: '/',
    icon: HomeIcon,
  },
  {
    name: 'Cine ecuatoriano',
    path: '/cataloge',
    icon: CollectionsIcon,
  },
  {
    name: 'Red de Espacios Audiovisuales',
    path: '/rea',
    icon: LocalMoviesIcon,
  },
  {
    name: 'Catálogo de películas REA',
    path: '/rea/movies',
    icon: SlideshowIcon,
  },
  {
    name: 'Work in progress',
    path: '/projects',
    icon: SlideshowIcon,
  },
  {
    name: 'Contacto',
    path: '/contact',
    icon: ContactSupportIcon,
  },
]
