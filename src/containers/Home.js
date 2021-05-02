import { useState } from 'react'

import Main from '../components/Main'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

import LayoutContext from '../providers/layout'

function Home() {
  const [layout, setLayout] = useState('grid')

  function changeLayout(layout) {
    setLayout(layout)
  }

  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <LayoutContext.Provider value={{ layout, changeLayout }}>
          <Header />
          <Products />
        </LayoutContext.Provider>
      </Main>
    </div>
  )
}

export default Home
