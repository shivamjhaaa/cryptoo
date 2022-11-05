
import React from 'react'
import { Link } from 'react-router-dom'
import coin from '../assets/coin.png'

const Navbar = () => {
  return (

    <nav>
        <Link to={'/'} onClick={() => window.location.reload()} >
        <h1>
          <img src={coin} alt="logo" />
          CRYPTOO
        </h1>
        </Link>
        
        <main>
            <Link to={"/"}>HOME</Link>
            <Link to={"/exchanges"}>EXCHANGES</Link>
            <Link to={"/coins"}>COINS</Link>
        </main>




    </nav>
  )
}

export default Navbar