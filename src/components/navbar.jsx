
import { useState ,useEffect} from 'react'
import l from '../lyrics'
export default function Navbar() {

    const [word, setword] = useState('')
    const [wo, setwo] = useState([])
  
   function searchF(e){
  setword(e.target.value)
  
   }
   
useEffect(()=>{ 
  
    let b = []
   b = l.filter((kd)=>{
  
    if(kd.title!=undefined) {
   if(kd.title.startsWith(word))
   {
  return kd
   } }
  }) 

            setwo(b)
            
  },[word])
   function click(e){


    l.filter(async (t)=> {
     let p = await e.target.innerText
   
     let tk = await t.title
     console.log(p,tk)
     console.log(p==tk)
      if(tk.includes(p)){
       
     document.querySelector('.l').innerHTML = ` <div style=" padding: 20px 8px; width: 65%;  height: 100%;" className="allp"><div  style="color: rgb(176, 120, 240); font-size: 1.8rem; font-weight: 700;" className="title"> ${t.title}</div> <p className='lyrics' >${t.lyrics}</p> </div>`
      }
     
      p = await ""
      tk = await ""
    })
    
        //  console.log(e.target.innerText);
       
  
  }
  function onB() {
document.querySelector('.pre').classList.add('.no')  } 
  function onF(){
document.querySelector('.pre').classList.remove('.no')
  }

  return (
    <div className='containernav' >
       <p>Zimare <span>tube</span></p> 
       <div className="search">
      <form action="">
        <input onBlur={ onB  } onFocus={onF} onChange={searchF} value={word} name="word" type="text" />
   
      </form>
      <div className="pre">
      { wo.map((k)=><div  key={k.title}  className="al"><div  className="titl " onClick={click} >{k.title}</div>  </div>)}
 </div>
    </div>
    </div>
  )
}
