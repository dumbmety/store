import Main from '../components/Main'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import LayoutContext from '../providers/layout'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <Main>
        <LayoutContext>
          <Header />
          <Products />
        </LayoutContext>
      </Main>
    </div>
  )
}

export default Home
