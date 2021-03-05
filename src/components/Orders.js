/* eslint-disable eqeqeq */
import React from 'react'
import styled from 'styled-components'


const NoOrders = styled.div`
margin:auto;
font-size:2rem;
margin-top:5%;
padding-bottom:5%;
text-align:center;
background-color:#f4f5f0;
width:800px;
img{
    width:600px;
    margin:auto;
}
span{
    font-weight:bold;
}
h3{
    padding:5%;

}
`;


export default function Orders(props){
    const {orders} = props;
    function camel(key) {
        var result = key.replace( /([A-Z])/, " $1" );
        return result.toLowerCase();
     }
    // eslint-disable-next-line eqeqeq
    if (orders=='') {
        return (
            <NoOrders>
            <h3>No orders at this time! Please wait...</h3>
            <img src={require('./images/cheems.png')} alt='sad cheems'></img>
            </NoOrders>
        )
    }
   const list = orders.map((order,index) => {
        return(
            <NoOrders className='listOfOrders' key={index}>
            <h3>Order #{index + 1}</h3>
            <p><span>Pizza size: </span>{order.size}</p>
            <p><span>Sauce: </span>{order.sauce}</p>
            <p><span>Toppings: </span>{order.toppings == '' ? 'NO' : order.toppings.map(topping => {return (`${camel(topping)}; `)})}</p>
            <p><span>Special instructions: </span>{order.special==='' ? 'NO' : order.special}</p>
            <p><span>Client's name: </span>{order.name}</p>
            </NoOrders>

        )
    })
    return list;
}