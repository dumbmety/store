import './style.css'
import { useState } from 'react'
import Backdrop from '../Backdrop'
import Categories from '../Sidebar/Categories'
import Footer from '../Sidebar/Footer'
import Header from '../Sidebar/Header'
import SideDrawer from './SideDrawer'
import Toggle from './SideDrawer/Toggle'

export default function Navbar() {
  const [show, setShow] = useState(false)

  const showNavbar = () => setShow(true)
  const hideNavbar = () => setShow(false)

  return (
    <>
      <nav className="main-nav">
        <h1>Products</h1>
        <Toggle showNavbar={showNavbar} />
      </nav>
      <SideDrawer show={show}>
        <div className="content">
          <Header />
          <Categories />
          <Footer />
        </div>
      </SideDrawer>
      <Backdrop show={show} hideNavbar={hideNavbar} />
    </>
  )
}
