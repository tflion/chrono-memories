import Button from './Components/Button'
import CeuEstrelado from './Components/CeuEstrelado/index'
import Header from './Components/Header/index'
import './App.css';


const App = () => {
  return(
    <>       
        <CeuEstrelado/>
               
        <Header>Chrono Memories</Header>
        <Button className="btnIndex">Iniciar</Button>
    </>
 
  )
}

export default App;