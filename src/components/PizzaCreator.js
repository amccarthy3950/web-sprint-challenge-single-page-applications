import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyleForm = styled.form`
padding:20px;
display:flex;
background:#f4f5f0;
flex-direction:column;
margin:auto;
margin-top:5%;
margin-bottom:5%;
width:800px;
border:5px solid black;
border-radius:5%;
justify-content:center;
font-size:1.2rem;
h2{
    font-size:2rem;
}
h3{
    font-size:1.7rem;
    text-align:left;
    background:lightgrey;
    padding:1.5%;
}
p{
    font-size:1.3rem;
}
label{
    margin:10px;
    display:flex;
    justify-content:left;
    text-align:left;
    align-items:left;
}
select{
    width:20%;
    margin:10px;
    padding:1%;
}
button{
    display:flex;
    padding:4%;
    width:20%;
    margin:auto;
    background-color:#008c45;
    border-radius:10%;
    color:white;
    font-size:1.3rem;
    justify-content:center;
    &:hover{
    cursor: pointer;
    background:#008c45;
    transition: all 0.3s ease-in-out;
  }
    transition: all 0.3s ease-in-out;
    :disabled{
        background-color:#cd212a
    }
}
`
const InputStyle = styled.input`
width:30%;
margin:10px;
padding:1%;
`;

const DivStyle = styled.div`
text-align:left;
margin:10px;
padding:1%;
`

const ErrorsStyle = styled.div`
color:red;
font-size:1rem;
`;



export default function PizzaCreator(props){
    const { value,disabled,errors,change,submit} = props;
    const history = useHistory()
    const onSubmit = e =>{
        e.preventDefault()
        submit()
        history.push('./orders')
    }
    const onChange = e => {
        const {name,value,type,checked} = e.target;
        const valueToUse = type === 'checkbox' ? checked : value ;
        change(name,valueToUse)
    }

    return (
        <StyleForm onSubmit={onSubmit}>
            <h2>Build Your Own Pizza</h2>
            <ErrorsStyle className='errors'>
          <p>{errors.size}</p>
          <p>{errors.sauce}</p>
          <p>{errors.name}</p>
        </ErrorsStyle>

            <h3>Choice of Size</h3>
        <select name='size'  
           value={value.size} 
           onChange={onChange}>
            <option value=''>Select</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='extra large'>Extra Large</option>
        </select>

        <div className='sauces'>
        <h3>Choice of Sauce</h3>
            <label> 
           <input name='sauce'
            type='radio' 
            value='barbeque'  
            onChange={onChange}
            checked={value.sauce === 'barbeque'}
            />
            Barbeque
            </label>
            <label> 
           <input name='sauce'
            type='radio' 
            value='original red'  
            onChange={onChange}
            checked={value.sauce === 'original red'}
            />
            Original Red
            </label><label> 
           <input name='sauce'
            type='radio' 
            value='garlic'  
            onChange={onChange}
            checked={value.sauce === 'garlic'}
            />
            Garlic
            </label><label> 
           <input name='sauce'
            type='radio' 
            value='alfredo'  
            onChange={onChange}
            checked={value.sauce === 'alfredo'}
            />
            Alfredo
            </label>
            </div>

            <div className='toppings'>
            <h3>Add Toppings</h3>
            <label>
                <input 
                name='pepperoni' 
                type='checkbox'
                checked={value.pepperoni}
                onChange={onChange}
                />Pepperoni
            </label>
            <label>
                <input 
                name='chicken' 
                type='checkbox'
                checked={value.chicken}
                onChange={onChange}
                />Chicken
            </label>
            <label>
                <input 
                name='onions' 
                type='checkbox'
                checked={value.onions}
                onChange={onChange}
                />Onions
            </label>
            <label>
                <input 
                name='mushrooms' 
                type='checkbox'
                checked={value.mushrooms}
                onChange={onChange}
                />Mushrooms
            </label>
            <label>
                <input 
                name='greenPepper' 
                type='checkbox'
                checked={value.greenPepper}
                onChange={onChange}
                />Green Pepper
            </label>
            <label>
                <input 
                name='pineapple' 
                type='checkbox'
                checked={value.pineapple}
                onChange={onChange}
                />Pineapple
            </label>
                </div>
            <div className='specialInstructions'>
            <h3>Special Instructions</h3>
            <label>
                <InputStyle name='special'
                type='text'
                placeholder='Anything else you&apos;d like to add?' 
                value={value.special}
                onChange={onChange}
                />
            </label>
                </div>
                <DivStyle className='enterName'>
                    <h3>Please enter your name:</h3>
                <InputStyle name='name'
                type='text'
                placeholder='Enter your name' 
                value={value.name}
                onChange={onChange}
                />
                </DivStyle>

                

            <button id={'submitButton'} disabled={disabled}>Submit</button>

            

        </StyleForm>
    )

}