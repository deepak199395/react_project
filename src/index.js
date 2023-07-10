import React from "react"
import  ReactDOM from "react-dom";
import "./index.css"
import Card from "./Card";
ReactDOM.render(
  < >
  <h1 style={{ display:"flex",  justifyContent:"center", background:"black",color:"white"}}> Netflix Originals</h1>
  <div style={{display:"flex" , padding:"90px" ,justifyContent:"space-between" , background:"black"}}>
<Card imgsrc="https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdNgatqAEYmpnLfi6tjKSmgKb2busntH34VDgo3JMSk7y6Jdwj4PXUFbCXe_YQVzjM69gNVoqTAEF82aMjY_KMlRHPJCtrh3k2d0UdqH1kxnACnKx2EBGZ4A1Y9O0joN9bXf.jpg?r=8a4"
  title="MONEY HEIST"
  sname="A netflix original series"
  link="https://www.netflix.com/in/title/80192098"
/>

<Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOrmsodYOR6KznN68DEq6fVgJQIYRw5BKfg&usqp=CAU"
  
  title="REVENDRAL"
  sname="A netflix original series"
  link="https://www.netflix.com/in/title/80002479"
/>
<Card
  imgsrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzoAGBuZdGQiGqNdYRnBi08WHedcqMG1LTA&usqp=CAU"
  title="STRANGER THINGS"
  sname="A netflix original series"
  link="https://www.netflix.com/in/title/80057281"
/>

</div>
<div className="container1">
<Card imgsrc="https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdNgatqAEYmpnLfi6tjKSmgKb2busntH34VDgo3JMSk7y6Jdwj4PXUFbCXe_YQVzjM69gNVoqTAEF82aMjY_KMlRHPJCtrh3k2d0UdqH1kxnACnKx2EBGZ4A1Y9O0joN9bXf.jpg?r=8a4"
  title="MONEY HEIST"
  sname="A netflix original series"
  link="https://www.netflix.com/in/title/80192098"
/>

<Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRY6IiusUgt7zd8AS-tCdE9siEGK27s81xQ&usqp=CAU"
  
  title="SCARED GAME"
  sname="A netflix original series"
  link="https://www.netflix.com/in/title/80115328"
/>
<Card
  imgsrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60_Fo2IuIm1qsNrvtcZ9U7q5zqfgAbCwgRA&usqp=CAU"
  title="BIG BOY BILLINIAR"
  sname="A netflix original series"
  link="https://www.netflix.com/in/title/80057281"
/>
</div>
</>,
document.getElementById("root")

)