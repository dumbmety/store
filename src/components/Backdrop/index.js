import './style.css'
import PropTypes from 'prop-types'

export default function Backdrop({ show, hideNavbar }) {
  return show && <div className="backdrop" onClick={hideNavbar} />
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
}
