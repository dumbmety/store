import { LayoutProvider } from 'providers/layout'

import Main from 'components/Main'
import Products from 'components/Products'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Navbar from 'components/Navbar'

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
      <Main>
        <LayoutProvider>
          <Header />
          <Products />
        </LayoutProvider>
      </Main>
    </div>
  )
}
