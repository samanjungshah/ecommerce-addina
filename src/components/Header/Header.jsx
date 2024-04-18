import React from 'react'
import Topbar from './Topbar';
import Second from './Second';


function Header() {
  return (
    <section className="nav">
      <Topbar/>
      <Second/>
    </section>
  )
}

export default Header