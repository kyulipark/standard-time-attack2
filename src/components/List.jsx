import React from 'react'
import { usePokemon } from '../context/PokeContext'
import Card from './Card';
import styled from 'styled-components';


const List = () => {
    const {allPokemon} = usePokemon();

  return (
    <StyledList>
   {allPokemon.map((c)=>(
    <Card key={c.id} data={c} type={"normal"} />
   ))}
    </StyledList>
  );
};


export default List

const StyledList = styled.div `
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   gap: 20px;
   background-color: yellow;
   padding: 20px;

`