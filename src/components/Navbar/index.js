import { useState } from 'react'
import Backdrop from '../Backdrop'
import Categories from '../Sidebar/Categories'
import Footer from '../Sidebar/Footer'
import Header from '../Sidebar/Header'
import SideDrawer from './SideDrawer'
import Toggle from './SideDrawer/Toggle'
import './style.css'
const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav className="main-nav">
        <h1>Products</h1>
        <Toggle setShow={setShow} />
      </nav>
      <SideDrawer show={show}>
        <div className="content">
          <Header />
          <Categories />
          <Footer />
        </div>
      </SideDrawer>
      <Backdrop show={show} setShow={setShow} />
    </>
  )
}

export default Navbar
