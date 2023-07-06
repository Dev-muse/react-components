 import Button from "./Button";
 import { PiStarBold } from "react-icons/pi";

function App() {

  const handleClick = (event)=>{
    console.log("clicked", event)
  }
 
  return (
    <div>
 
     <div><Button primary rounded outline onClick={handleClick} ><PiStarBold /> Primary</Button></div>
     <div><Button secondary rounded className="mt-4">Secondary</Button></div>
     <div><Button warning outline>Warning</Button></div>
     <div><Button danger>Danger</Button></div>
     <div><Button success>Success</Button></div>
    </div>
  )
}

export default App;
