import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/outline'

import styles from './style.module.css'

import Backdrop from '../../../Backdrop'
import Footer from '../../../Sidebar/Footer'
import Header from '../../../Sidebar/Header'
import SideDrawer from '../../../Navbar/SideDrawer'
import Toggle from '../../../Navbar/SideDrawer/Toggle'

function Navbar({ quantity }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav className={styles.Nav}>
        <Link className={`${styles.NavLogo} lg:hidden`} to="/">
          Store
        </Link>
        <Toggle setShow={setShow} />

        <div className="container hidden mx-auto lg:flex justify-between items-center">
          <Link className={styles.NavLogo} to="/">
            Store
          </Link>

          <ul className={styles.NavItems}>
            <li className={styles.NavItem}>
              <Link to="/">Products</Link>
            </li>
            <li className={styles.NavItem}>
              <Link to="/">Offers</Link>
            </li>
            <li className={styles.NavItem}>
              <Link to="/auth">Login</Link>
            </li>
            <li className={styles.NavItem}>
              <Link to="/auth">Register</Link>
            </li>
            <li className={`${styles.NavItem} ${styles.CartButton}`}>
              <span>{quantity}</span>
              <ShoppingCartIcon className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </nav>

      <SideDrawer show={show}>
        <div className="content">
          <Header />
          <ul className={styles.NavItems}>
            <li className={styles.NavItem}>
              <Link to="/products">Products</Link>
            </li>
            <li className={styles.NavItem}>
              <Link to="/offers">Offers</Link>
            </li>
            <li className={styles.NavItem}>
              <Link to="/auth">Login</Link>
            </li>
            <li className={styles.NavItem}>
              <Link to="/auth">Register</Link>
            </li>
            <li className={`${styles.NavItem} ${styles.CartButton}`}>
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
