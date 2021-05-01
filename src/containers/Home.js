import Main from '../components/Main'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <Products />
      </Main>
    </div>
  )
}

export default Home
