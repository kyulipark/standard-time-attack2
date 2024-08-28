import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import Dex from "../pages/Dex"
import { PokemonProvider } from "../context/PokeContext"

const Router = () => {
 
    return (
     
        <PokemonProvider>
         <BrowserRouter>
            <Routes>
                <Route path ="/home" element={<Home />} />
                <Route path ="/dex" element={<Dex />} />
                <Route path ="/detail" element={<Detail />} />
            </Routes>
         </BrowserRouter>
         </PokemonProvider>
    )
  }
  
  export default Router
  