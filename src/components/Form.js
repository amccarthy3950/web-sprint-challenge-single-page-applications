import React, { useState } from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import Pizza from './Pizza'
import Schema from './Schema'
import * as yup from 'yup'

const initialFormValues={
    name: '',
    email: '',
    phone: '',
    size: '',
    sauce: '',
    pepperoni: false,
    sausage: false,
    ham: false,
    blackOlives: false,
    greenPepper: false,
    extraCheese: false,
    textarea: '',
}
const initialFormErrors={
    name: '',
    email: '',
    phone: '',
    textarea: '',
}
function Form() {
const [formValues, setFormValues]=useState(initialFormValues)
const [formErrors, setFormErrors]=useState(initialFormErrors)
const [newOrder, setNewOrder]=useState(initialFormValues)

const postNewOrder = (newOrder) => {
    axios
    .post('https://reqres.in/api/user', newOrder)
    .then((res) => {
        console.log(res.data)
    setNewOrder(newOrder)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
   postNewOrder(formValues)
  };

const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  }; 

  const inputChange = (name, value) =>{
    yup
        .reach(Schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({
            ...formErrors,
            [name]: "",
          })})
          .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })});
       setFormValues({
        ...formValues,
        [name]: value, 
      });
    };

    return (
        <form onSubmit={onSubmit}>
        <div className='form'>
            <h5>Build Your Pizza</h5>
            <label>
                Name
                <input
                value={formValues.name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>
            <label>
                 Email 
                <input
                value={formValues.email}
                onChange={onChange}
                name='email'
                type='email'
                />
            </label>
            <label>
                Phone Number 
                <input
                value={formValues.phone}
                onChange={onChange}
                name='phone'
                type='text'
                />
            </label>
            <h3>****Required****</h3>
            
            <label>Pizza Size
                <select 
                name='size'
                value={formValues.size}
                onChange={onChange}
                >
                <option value=''>-----select size----</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='xl'>X-Large</option>
                </select>          
            </label>
            <h2>Choice of Sauce</h2>
            <h3>****Required****</h3>
            <label>
            Red Sauce
          <input
            type="radio"
            name="sauce"
            value="red sauce"
            checked={formValues.sauce === "red sauce"}
            onChange={onChange}
          />
        </label>
        <label>
        Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="garlic ranch"
            checked={formValues.sauce === "garlic ranch"}
            onChange={onChange}
          />
        </label>
        <label>
        Bbq Sauce
          <input
            type="radio"
            name="sauce"
            value="bbq sauce"
            checked={formValues.sauce === "bbq sauce"}
            onChange={onChange}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="spinach alfredo"
            checked={formValues.sauce === "spinach alfredo"}
            onChange={onChange}
          />
        </label>
        <h2>Select Your Toppings</h2>
        <h3>Choose up to 5</h3>
        <div className='checked'>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={formValues.sausage}
            onChange={onChange}
          />
        </label>
        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            checked={formValues.ham}
            onChange={onChange}
          />
        </label>
        <label>
          Black Olives
          <input
            type="checkbox"
            name="blackOlives"
            checked={formValues.blackOlives}
            onChange={onChange}
          />
        </label>
        <label>
          Green Pepper
          <input
            type="checkbox"
            name="greenPepper"
            checked={formValues.greenPepper}
            onChange={onChange}
          />
        </label>
        <label>
          Extra Cheese
          <input
            type="checkbox"
            name="extraCheese"
            checked={formValues.extraCheese}
            onChange={onChange}
          />
        </label>
        </div>
        <h3>Special Instructions</h3>
        <textarea 
        name='textarea'
        value={formValues.textarea}
        onChange={onChange}
        placeholder='square cut, light sauce, ring doorbell...' 
        rows='4' 
        cols='50' 
        />    
        <div className='add-to'>
        <button onClick={(evt) => evt.preventDefault}>Add To Order</button>
        </div>
       <Pizza newOrder={newOrder}/>
        </div>
        </form>
    )
}

export default Form
