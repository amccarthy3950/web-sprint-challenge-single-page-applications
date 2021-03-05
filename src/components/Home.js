import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const ButtonStyled = styled.button`
  margin:10%;
  background:yellow;
  padding:3%;
  font-size:2rem;
  border-radius:50%;
  &:hover{
    cursor: pointer;
    background:#008c45;
    transition: all 0.3s ease-in-out;
  }
    transition: all 0.3s ease-in-out;
`;

export default function Home() {
    const history = useHistory();

    const orderPizza = () => {
        history.push('/pizza')
      }

    return(
    <div  className='home'>
      <ButtonStyled onClick={orderPizza} className='mainButton'>
        Order Now!
      </ButtonStyled>
    </div>

    )
}