import { ViewListIcon } from '@heroicons/react/outline'
import { useLayoutContext } from '../../../../providers/layout'

function List() {
  const { layout, changeLayout } = useLayoutContext()

  return (
    <li onClick={() => changeLayout('list')} className="mr-1 cursor-pointer">
      <ViewListIcon
        className={`w-7 h-7 mr-4 transition duration-200 ${
          layout === 'list' ? 'text-black' : 'text-cool'
        }`}
      />
    </li>
  )
}

export default List
