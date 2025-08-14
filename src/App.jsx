import './App.css'
import Bananafrita from './components/bananafrita'


function App() {

  const url = "https://ih1.redbubble.net/image.401351309.6259/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
  
  return (  
    <div className='App'>
 
      <h1>Coisas Bananais:</h1>
      <h2>Banana drake</h2>
      <img src={url} alt="banana drake" width={400}/>
      <Bananafrita/>
    
      
     
    </div>
  )
}

export default App
