import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import Toggle from '../../../Navbar/SideDrawer/Toggle'
import { useState } from 'react'
import SideDrawer from '../../../Navbar/SideDrawer'
import Header from '../../../Sidebar/Header'
import Footer from '../../../Sidebar/Footer'
import Backdrop from '../../../Backdrop'
const Navbar = ({ quantity }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav className={`${classes.Nav}`}>
        <Link className={`${classes.NavLogo} lg:hidden`} to="/">
          Store
        </Link>
        <Toggle setShow={setShow} />

        <div className="container hidden mx-auto lg:flex justify-between items-center">
          <Link className={classes.NavLogo} to="/">
            Store
          </Link>
          <ul className={classes.NavItems}>
            <li className={classes.NavItem}>
              <Link to="/products">Products</Link>
            </li>
            <li className={classes.NavItem}>
              <Link to="/offers">Offers</Link>
            </li>
            <li className={classes.NavItem}>
              <Link to="/auth">Login</Link>
            </li>
            <li className={classes.NavItem}>
              <Link to="/auth">Register</Link>
            </li>
            <li className={`${classes.NavItem} ${classes.CartButton}`}>
              <span>{quantity}</span>
              <ShoppingCartIcon className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </nav>

      <SideDrawer show={show}>
        <div className="content">
          <Header />
          <ul className={classes.NavItems}>
            <li className={classes.NavItem}>
              <Link to="/products">Products</Link>
            </li>
            <li className={classes.NavItem}>
              <Link to="/offers">Offers</Link>
            </li>
            <li className={classes.NavItem}>
              <Link to="/auth">Login</Link>
            </li>
            <li className={classes.NavItem}>
              <Link to="/auth">Register</Link>
            </li>
            <li className={`${classes.NavItem} ${classes.CartButton}`}>
              <span>{quantity}</span>
              <ShoppingCartIcon className="w-6 h-6" />
            </li>
          </ul>
          <Footer />
        </div>
      </SideDrawer>
      <Backdrop show={show} setShow={setShow} />
    </>
  )
}

export default Navbar
