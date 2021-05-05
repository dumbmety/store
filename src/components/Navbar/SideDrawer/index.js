import Categories from '../../Sidebar/Categories'
import Footer from '../../Sidebar/Footer'
import Header from '../../Sidebar/Header'
import './style.css'
const SideDrawer = props => {
  const { show } = props

  let classes = ['sidedrawer', 'close'] //close: transform: translateX(-160%);

  if (show) {
    classes = ['sidedrawer', 'open'] //open: transform: translateX(0);
  }

  return (
    <aside className={classes.join(' ')}>
      <div className="content">
        <Header />
        <Categories />
        <Footer />
      </div>
    </aside>
  )
}

export default SideDrawer
