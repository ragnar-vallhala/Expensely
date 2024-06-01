import React from 'react'
import {SideBar,Graph} from './'

import './home.css'
const Home = () => {
  return (
    <>
<div class="heading"><h1>Expensely</h1></div>
<div class='row'>
  <div class='.sidebar'><SideBar /></div>
  <div class="graph"><Graph /></div>
</div>
    </>
  )
}

export default Home
