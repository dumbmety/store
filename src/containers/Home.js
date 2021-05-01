import Main from '../components/Main'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <Header />
        <Products />
      </Main>
    </div>
  )
}

export default Home
