import { ViewListIcon } from '@heroicons/react/outline'
import { useLayout } from 'providers/layout'

export default function List() {
  const { layout, changeLayout } = useLayout()

  const classes = ['w-7 h-7 mr-4 transition duration-200']
  layout === 'list' ? classes.push('text-black') : classes.push('text-cool')

  const handleChangeLayout = () => changeLayout('list')

  return (
    <li onClick={handleChangeLayout} className="mr-1 cursor-pointer">
      <ViewListIcon className={classes.join(' ')} />
    </li>
  )
}
