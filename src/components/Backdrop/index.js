import './style.css'

const Backdrop = ({ show, setShow }) => {
  return show && <div onClick={() => setShow(false)} className="backdrop"></div>
}

export default Backdrop
