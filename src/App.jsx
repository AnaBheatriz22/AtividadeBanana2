import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {

  const nome = "Lincon"

  const newNome = nome.toUpperCase()


  return (  
    <div className='App'>
      <HelloWorld/>
      <h1>Brr brr Patapim</h1>
    </div>
  )
}

export default App
