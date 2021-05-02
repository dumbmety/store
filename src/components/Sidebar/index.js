import './style.css'
import SimpleBar from 'simplebar-react'

import Header from './Header'
import Footer from './Footer'
import Categories from './Categories'

function Sidebar() {
  return (
    <aside className="sidebar">
      <SimpleBar className="max-h-screen">
        <div className="content">
          <Header />
          <Categories />
          <Footer />
        </div>
      </SimpleBar>
    </aside>
  )
}

export default Sidebar
