
import './App.css'
import {ChakraProvider} from "@chakra-ui/react"
import theme from './chakra-theme'
function App() {
  

  return (
    <ChakraProvider theme={theme}>
      <Header/>
     <Hero/>
    </ChakraProvider>
  )
}
import { Hero } from './components/Hero/Hero'
import Header from './components/Hero/Header/Header'

export default App
