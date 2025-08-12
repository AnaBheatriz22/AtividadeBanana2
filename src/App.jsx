import './App.css'
import TungSahur from './components/TungSahur'

function App() {

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF02Dy1bZV0SOmqgCEflkk5SKEOesjwdkDPg&s"
  
  return (  
    <div className='App'>
 
      <h1>Brainrots Memes</h1>
      <h2>Brr Brr Patapim:</h2>
    
      <img src={url} alt="Brr brr patapim" />
      <TungSahur/>
     
    </div>
  )
}

export default App
