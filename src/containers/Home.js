import { useState } from 'react'

import Main from 'components/Main'
import Products from 'components/Products'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import LayoutContext from 'providers/layout'

export default function Home() {
  const [layout, setLayout] = useState('grid')
  const changeLayout = layout => setLayout(layout)

  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <Main>
        <LayoutContext.Provider value={{ layout, changeLayout }}>
          <Header />
          <Products />
        </LayoutContext.Provider>
      </Main>
    </div>
  )
}
