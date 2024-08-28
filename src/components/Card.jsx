import React from 'react'
import { usePokemon } from '../context/PokeContext'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = ({data, type}) => {
 const {addPokemon, removePokemon} = usePokemon();

const navigate = useNavigate();
 const addHandleCilck =(e) => {
    e.stopPropagation();
    addPokemon(data);
 }

  const RemoveHandleClick = (e) =>{
    e.stopPropagation();
    removePokemon(data);
    alert("삭제!");
    };

  return (
    <StyledCard
        onClick={()=>{
            navigate(`/detail?id=${data.id}`);
        }}
    >
   <h6>id: {data.id}</h6>
   <h6>name: {data.korean_name}</h6>
   <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
   alt={data.korean_name}
    />

{type === "selected" ? (
    <button 
     onClick={RemoveHandleClick}
     > 삭제 </button>
) :(
   <button onClick={addHandleCilck}
   > 추가 </button>
)}
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
    background-color: teal;
    height: auto;
    width: 100vh;
`
