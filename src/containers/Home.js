import Main from '../components/Main'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useState } from 'react'

function Home() {
  const [GridView, setGridView] = useState(true)
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <Header GridView={GridView} setGridView={setGridView} />
        <Products GridView={GridView} />
      </Main>
    </div>
  )
}

export default Home
