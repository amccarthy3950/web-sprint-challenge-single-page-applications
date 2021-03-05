import React,{useState,useEffect} from "react";
import './App.css'
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import Home from './components/Home';
import PizzaCreator from './components/PizzaCreator';
import Orders from './components/Orders'


//some design
const NavStyle = styled.nav`
  text-align:center;
  margin:auto;
  background-color:#f4f5f0;
  padding-bottom:4%;
  font-size:2rem;
  color:black;
  h1{
    text-align:left;
    padding-left:4%;
    padding-top:3%;
    background-color:#008c45;
  }
`;

const NavLink = styled(Link)`
  padding: 20px;
  text-decoration: none;
  margin: 50px;
  font-weight:bold;
  :visited{
    color:black;
  }
  &:hover {
    color: #cd212a;
    transition: all 0.3s ease-in-out;
  }
    transition: all 0.3s ease-in-out;
`;


const initialFormValues = {
  size:'',
  sauce:'',
  toppings:'',
  special:'',
  name:'',
  // toppings
  pepperoni:false,
  chicken:false,
  onions:false,
  mushrooms:false,
  greenPepper:false,
  pineapple:false,
}

// empty array, base for our orders
const initialOrders = []

const initialFormErrors = {
size:'',
sauce:'',
name:'',
}

// submit button toggler
const initialDisabled = false



const App = () => {

  const [formValues,setFormValues] = useState(initialFormValues);
  const [orders,setOrders] = useState(initialOrders);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled,setDisabled] = useState(initialDisabled)


  function inputChange(name,value){
    yup.reach(formSchema,name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]:''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })

    setFormValues({...formValues, [name]:value})
  }


  const postNewOrder = newOrder =>{
    axios
    .post('https://reqres.in/api/users',newOrder)
    .then(res=>{
      setOrders([...orders,res.data])
    })
    .catch(err => {
      console.log(err);
      alert(err) //this will notify user about network error
    })
    setFormValues(initialFormValues)
  }

  const formSubmit = () =>{
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      special: formValues.special.trim(),
      name: formValues.name.trim(),
      toppings: ['pepperoni','chicken','onions','mushrooms','greenPepper','pineapple'].filter(topping => formValues[topping]),
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  //check posted orders
  useEffect(() =>{
    console.log(orders)
  },[orders])

  return (
    <div className='App'>
    <NavStyle>
      <h1 className='main-header'>LAMBDA EATS</h1>
      <div className='nav-links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/pizza">Order Pizza!</NavLink>
      </div>
    </NavStyle>

    <Switch>
      <Route path="/pizza">
        <PizzaCreator 
        value={formValues} 
        disabled={disabled} 
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}/>
      </Route>
      <Route path="/orders">
        <Orders orders={orders}/>
      </Route>
      <Route path="/">
        <Home />
      </Route> 
    </Switch>
  </div>
  );
};
export default App;
