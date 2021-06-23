import { ViewGridIcon } from '@heroicons/react/outline'
import { useLayout } from 'providers/layout'

export default function Grid() {
  const { layout, changeLayout } = useLayout()

  const classes = ['w-7 h-7 transition duration-200']
  layout === 'grid' ? classes.push('text-black') : classes.push('text-cool')

  const handleChangeLayout = () => changeLayout('grid')

  return (
    <li onClick={handleChangeLayout} className="mr-1 cursor-pointer">
      <ViewGridIcon className={classes.join(' ')} />
    </li>
  )
}
