import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import Login from 'components/Auth/Login'
import Signup from 'components/Auth/Signup'
import styles from './style.module.css'

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login')
  const rightSide = useRef(null)

  useEffect(() => {
    rightSide.current.classList.add(styles.right)
  }, [])

  const changeState = () => {
    if (activeTab === 'login') {
      rightSide.current.classList.remove(styles.right)
      rightSide.current.classList.add(styles.left)
    } else {
      rightSide.current.classList.remove(styles.left)
      rightSide.current.classList.add(styles.right)
    }

    const tab = activeTab === 'login' ? 'signup' : 'login'
    setActiveTab(tab)
  }

  return (
    <SimpleBar className="max-h-screen">
      <Link className={styles.backToHome} to="/">
        Back to home
      </Link>

      <div className={styles.app}>
        <div className={styles.login}>
          <div className={styles.container}>
            {activeTab === 'login' ? <Login /> : <Signup />}
          </div>
          <RightSide
            text={activeTab === 'login' ? 'Signup' : 'Login'}
            onClick={changeState}
            rightSideRef={rightSide}
          />
        </div>
      </div>
    </SimpleBar>
  )
}

function RightSide({ text, onClick, rightSideRef }) {
  return (
    <div className={styles.rightSide} ref={rightSideRef} onClick={onClick}>
      <div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}
