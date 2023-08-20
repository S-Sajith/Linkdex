import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import LeftMenu from './components/LeftMenu'
import darkTheme from './components/DarkTheme'
import HeroPage from './pages/HeroPage'
import Footer from './components/Footer'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{padding:0}}>
      <CssBaseline />
        <LeftMenu/>
        <HeroPage/>
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}

export default App
