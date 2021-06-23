import './style.css'
import PropTypes from 'prop-types'

export default function Backdrop({ show, setShow }) {
  return show && <div className="backdrop" onClick={() => setShow(false)} />
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
}
