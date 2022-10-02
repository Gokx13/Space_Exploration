import React,{useState} from "react"
import Nav from "./Nav"
import Home from "./home"
import Dest from "./dest"
import Crew from "./crew"
import Tech from "./tech"
import {Route,Routes,BrowserRouter} from "react-router-dom"

function App(){

  var f="lg:bg-desktop-image bg-mobile-image";
    var aaa=window.location.pathname;
    switch (aaa) {
        case "/":
            f="bg-desktop-image"
            break;
            case "/home":
            f="bg-desktop-image "
                break;   case "/destination":
            f="bg-dest-desktop"
                break;   case "/crew":
            f="bg-crew-desktop "
                break;   case "/technology":
            f="bg-tech-desktop "
                break;
    
        default:
            break;
    }
return <div  className={f}>
<Nav />
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="crew" element={<Crew/>}/>
        <Route path="destination" element={<Dest/>}/>
        <Route path="technology" element={<Tech/>}/>


        
    </Routes>
</BrowserRouter>


</div>

    }
export default App;