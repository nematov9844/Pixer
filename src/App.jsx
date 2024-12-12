import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import HowToWorking from './components/HowToWorking'
import Services from './components/Services'
import Order from './components/Order'
import Footer from './components/Footer'

function App() {

  return (
    <Box>

      <Box display={'flex'} flexDirection={"column"} gap={5} alignItems={"center"}>
        <Header />
        <Hero />
        <Services />
        <HowToWorking />
        <Order />
      </Box>
      <Footer />
    </Box>
  )
}

export default App
