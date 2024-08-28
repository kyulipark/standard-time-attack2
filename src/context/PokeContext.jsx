import { Children, createContext, useContext, useState } from "react";
import MOCK_DATA from "../mock";


const PokeContext = createContext(); 

export function usePokemon(){
    return useContext(PokeContext);
}

export function PokemonProvider({Children}){
    const [allPokemon, setAllPokemon] = useState(MOCK_DATA);
    const [selectedPokemon, setSelectedPokemon] = useState();

    //add
    const addPokemon = (pokemon) =>{
        
        if (selectedPokemon.length > 6){
            alert("6개의 포켓몬만 선택가능")
            return;
        }

        if (selectedPokemon.some((p) => p.id === pokemon.id)){
            alert("이미 선택된 포켓몬")
            return;
        }
        setSelectedPokemon((prevSelected)=> [...prevSelected, pokemon])
    }

    //remove
    const reovePokemon = (pokemon) =>{
        setSelectedPokemon((prevSelected)=> 
            prevSelected.filter((p) => p.id !== pokemon.id))
    }

return(
    <PokeContext.Provider
    value={{allPokemon, selectedPokemon, addPokemon, reovePokemon}}>
        {Children}
    </PokeContext.Provider>
)


}


