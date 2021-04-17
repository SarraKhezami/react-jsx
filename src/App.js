import './App.css';

import root from "./root.png"

function App() {
  
   return(
<div style={{border:"solid 1px black",width: 1000}}>
<h1 className="title red">sarra khézami</h1>
<br/>
<img src={root} alt ='myImage' />
<br/>
<img src="/favicon.ico" alt="myimage" />
<br/>
<iframe width="450" height="250" src="https://www.youtube.com/embed/7sDY4m8KNLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
</div>
  );
}

export default App;
