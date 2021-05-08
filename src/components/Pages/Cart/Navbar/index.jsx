import { Link } from 'react-router-dom'
import classes from './style.module.css'
import { ShoppingCartIcon } from '@heroicons/react/outline'
const Navbar = ({ quantity }) => {
  return (
    <nav className={`${classes.Nav}`}>
      <div className="container mx-auto flex justify-between items-center">
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
  )
}

export default Navbar
