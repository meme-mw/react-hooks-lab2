import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [perfWeight, setPerfWeight] = useState(0)
  const [bmi, setBmi] = useState("")
  const [img, setImg] = useState("")
    function fun(){
      setBmi(Number(weight)/((height/100)*(height/100)));
      
      setPerfWeight( 45.5 + (0.91 * ( height - 152.4)));
      image();
      
      
    }
    function image(){
      if (bmi!=""){
        if(bmi<18.5){
        setImg("https://i.ibb.co/kmBjjMJ/blue.png")}
        else if(bmi>18.5&&bmi<24.9){
          setImg("https://i.ibb.co/cLFdHqJ/green.png")
        }else if(bmi>25&&bmi<29.9){
          setImg("https://i.ibb.co/DKg9bQv/yellow.png")
        }else if(bmi>30&&bmi<34.9){
          setImg("https://i.ibb.co/M662fJp/orange.png")
        }else if(bmi>35){
          setImg("https://i.ibb.co/YcyjJBV/red.png")
        }
      }
      document.querySelector(".rounded-none").click();
      document.querySelector(".rounded-none").click();
    }
  return (
    <>

  <section className='w-4/5 mx-auto flex  items-center justify-center h-96 flex-wrap pt-10'>
  
  
  <div style={{width:"320px"}} className='  flex justify-around items-center flex-col h-[100%] shadow-md p-10'>
    <input onChange={(e)=>setWeight(e.target.value)}  type="number"  placeholder="الوزن" className="input input-bordered w-full max-w-xs"/>
    <input onChange={(e)=>setHeight(Number(e.target.value))}  type="number" placeholder="الطول بالسانتي متر" className="input input-bordered w-full max-w-xs"/>
    
   <button onClick={fun} className="rounded-none">احسب</button>
   <p> {bmi}  كتلة الجسم</p>
   <p>{perfWeight} :الوزن المثالي</p>
   </div>
   
   <div style={{width:"320px"}} className='w-2/4  h-[100%] shadow-md p-10 flex flex-col justify-top items-center'>
   <h3 className='text-center font-bold'>شكل جسمك</h3>
    <img src={img} alt=""  className='w-2/3'/>
   { console.log(img)}
   </div>
</section>
    </>
  )
}

export default App
