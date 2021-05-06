import { ViewGridIcon } from '@heroicons/react/outline'
import { useDataHandler } from '../../../../providers/layout'

function Grid() {
  const { layout, changeLayout } = useDataHandler()

  return (
    <li onClick={() => changeLayout('grid')} className="mr-1 cursor-pointer">
      <ViewGridIcon
        className={`w-7 h-7 transition duration-200 ${
          layout === 'grid' ? 'text-black' : 'text-cool'
        }`}
      />
    </li>
  )
}

export default Grid
