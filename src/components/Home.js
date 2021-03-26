import React from 'react'
import {Link, Route} from 'react-router-dom'

function Home() {
    return (
        <div className='link'>
          <h2>This is my HOME PAGE</h2>
          <Link to="/Form">
            <button onClick={(evt) => evt.preventDefault}>Order Now!</button>
          </Link>
          <Route path="./Form"></Route>
        </div>
      );
    }
export default Home