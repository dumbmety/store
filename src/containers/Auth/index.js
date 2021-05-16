import { useEffect, useState, useRef } from 'react'
import SimpleBar from 'simplebar-react'

import Login from '../../components/Auth/Login'
import Signup from '../../components/Auth/Signup'

import classes from './style.module.css'

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login')
  const rightSide = useRef(null)

  useEffect(() => {
    rightSide.current.classList.add(classes.right)
  }, [])

  const changeState = () => {
    if (activeTab === 'login') {
      rightSide.current.classList.remove(classes.right)
      rightSide.current.classList.add(classes.left)
    } else {
      rightSide.current.classList.remove(classes.left)
      rightSide.current.classList.add(classes.right)
    }

    const tab = activeTab === 'login' ? 'signup' : 'login'
    setActiveTab(tab)
  }

  return (
    <SimpleBar className="max-h-screen">
      <div className={classes.app}>
        <div className={classes.login}>
          <div className={classes.container}>
            {activeTab === 'login' ? <Login /> : <Signup />}
          </div>
          <RightSide
            text={activeTab === 'login' ? 'Signup' : 'Login'}
            click={changeState}
            rightSideRef={rightSide}
          />
        </div>
      </div>
    </SimpleBar>
  )
}

const RightSide = ({ text, click, rightSideRef }) => {
  return (
    <div className={classes.rightSide} ref={rightSideRef} onClick={click}>
      <div>
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  )
}

export default Auth
