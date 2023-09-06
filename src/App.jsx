
import l from '../src/lyrics'
import './App.css'
import Navbar from './components/navbar'

function App() {
  



  return (
    <div className="container">
   <Navbar />
   
 <div className="l">
    
 <div className="allp"><div style={{color: "rgb(176, 120, 240)", fontSize: "1.8rem", fontWeight: 700}}  className="title">  {l[Math.floor(Math.random()*l.length)].title}</div> <p className='lyrics' >  {l[Math.floor(Math.random()*l.length)].lyrics }</p> </div> </div>
   <div className="by">Powered by: eyob2m</div>
    </div>
    
  )
}

export default App
