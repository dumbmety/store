import { ViewListIcon } from '@heroicons/react/outline'
const list = props => {
  const { GridView, setGridView } = props
  return (
    <li
      onClick={() => setGridView(false)}
      className={`mr-1 ${GridView ? 'cursor-pointer' : 'curser-normal'}`}
    >
      <ViewListIcon
        className={`${GridView ? 'text-cool' : 'text-black'} w-7 h-7 mr-4`}
      />
    </li>
  )
}

export default list
