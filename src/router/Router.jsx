import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Characters } from "../pages/Characters/Characters";
import { Info } from "../pages/Info/Info";


const Router = () => {
    return(
        
        <BrowserRouter>
        
            <Routes>
                
             <Route path="/" element={<Home />} />
             <Route path="/info" element={<Info/>} />
             <Route path="/personajes" element={<Characters />}/>

            </Routes>

        </BrowserRouter>
      
    )
}
export { Router }