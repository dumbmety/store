import './style.css'
import SimpleBar from 'simplebar-react'

function Main({ children }) {
  
  return (
    <main className="content">
      <SimpleBar className="scroll">{children}</SimpleBar>
    </main>
  )
}

export default Main
