import './index.css'

import Header from './Header'
import Footer from './Footer'
import Categories from './Categories'

function Sidebar() {
  return (
    <aside className="sidebar">
      <Header />
      <Categories />
      <Footer />
    </aside>
  )
}

export default Sidebar
