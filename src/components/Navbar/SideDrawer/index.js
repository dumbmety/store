import './style.css'
const SideDrawer = props => {
  const { show, children} = props

  let classes = ['sidedrawer', 'close'] //close: transform: translateX(-160%);

  if (show) {
    classes = ['sidedrawer', 'open'] //open: transform: translateX(0);
  }

  return (
    <aside className={classes.join(' ')}>
      {children}
    </aside>
  )
}

export default SideDrawer
