import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'

const Loader = () => {
  const isLoader = useSelector(state => state.loader)

  if (!isLoader) return null

  return (
    <div
      style={{
        zIndex: 1000,
        width: '100vw',
        height: '100vh',
        verticalAlign: 'center',
      }}
    >
      <Box
        sx={{ display: 'flex', width: 350, margin: 'auto' }}
      >
        <CircularProgress color="primary" />
      </Box>
    </div>
  )
}

export default Loader
