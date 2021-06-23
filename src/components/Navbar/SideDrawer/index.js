import './style.css'

export default function SideDrawer({ show, children }) {
  let classes = ['sidedrawer', 'close']
  if (show) classes = ['sidedrawer', 'open']

  return <aside className={classes.join(' ')}>{children}</aside>
}
