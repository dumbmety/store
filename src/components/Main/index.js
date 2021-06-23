import './style.css'
import SimpleBar from 'simplebar-react'

export default function Main({ children }) {
  return (
    <main className="content">
      <SimpleBar className="scroll">{children}</SimpleBar>
    </main>
  )
}
