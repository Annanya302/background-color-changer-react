import { useState } from "react"
import hero from "./assets/hero.png";
import vite from "./assets/vite.svg";

function App() {
  const [color, setColor] = useState("olive")
const [bgImage, setBgImage] = useState("");
  return (
  <>
  
      <div className="w-full h-screen duration-100"
      style={{
  backgroundColor: color,
  backgroundImage: bgImage ? `url(${bgImage})` : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}>
        <h1 className="text-white">Background Changer MiniProject</h1>
      </div>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
  <button 
  onClick={()=>{
  setBgImage(""); setColor("red")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "red"}}>Red
  </button>
   <button 
   onClick={()=>{
  setBgImage(""); setColor("yellow")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "yellow"}}>Yellow
  </button>
   <button 
   onClick={()=>{
  setBgImage(""); setColor("black")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "black"}}>Black
  </button>
   <button 
   onClick={()=>{
  setBgImage(""); setColor("purple")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "purple"}}>Purple
  </button>
   <button 
   onClick={()=>{
  setBgImage(""); setColor("brown")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "brown"}}>Brown
  </button>
   <button 
   onClick={()=>{
  setBgImage(""); setColor("green")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "green"}}>Green
  </button>
    <button 
   onClick={()=>{
  setBgImage(""); setColor("grey")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "grey"}}>Grey
  </button>
    <button 
   onClick={()=>{
  setBgImage(""); setColor("blue")}}
  className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "blue"}}>Blue
  </button>
  <button
  onClick={() => setBgImage(vite)}
  className="px-3 py-1 rounded-full bg-blue-500 text-white"
>
  Vite logo
</button>

<button
  onClick={() => {setColor("");setBgImage(hero)}}
  className="px-3 py-1 rounded-full bg-green-500 text-white"
>
  Logo 
</button>
<button
  onClick={() => {setColor("");setBgImage("")}}
  className="px-3 py-1 rounded-full bg-gray-600 text-white"
>
  Remove Image
</button>
</div>
      </div>
    </>
  )
}

export default App
