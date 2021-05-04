import { useState, useRef, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'
import classes from './style.module.css'

const Auth = () => {
  const [isLogginActive, setIsLogginActive] = useState(true)

  const rightSide = useRef(null)

  useEffect(() => {
    //Add .right by default
    rightSide.current.classList.add(classes.right)
  }, [])

  const changeState = () => {
    if (isLogginActive) {
      console.log(isLogginActive)
      rightSide.current.classList.remove(classes.right)
      rightSide.current.classList.add(classes.left)
    } else {
      console.log(isLogginActive)
      rightSide.current.classList.remove(classes.left)
      rightSide.current.classList.add(classes.right)
    }
    setIsLogginActive(prevState => !prevState)
  }

  const current = isLogginActive ? 'Signup' : 'Login'
  const currentActive = isLogginActive ? 'Login' : 'Signup'

  return (
    <div className={classes.App}>
      <div className={classes.login}>
        <div className={classes.container}>
          {isLogginActive ? <Login /> : <Signup />}
        </div>
        <RightSide
          current={current}
          currentActive={currentActive}
          onClick={changeState}
          rightSideRef={rightSide}
        />
      </div>
    </div>
  )
}

const RightSide = props => {
  return (
    <div
      className={classes.RightSide}
      ref={props.rightSideRef}
      onClick={props.onClick}
    >
      <div>
        <div className={classes.Text}>{props.current}</div>
      </div>
    </div>
  )
}
export default Auth
