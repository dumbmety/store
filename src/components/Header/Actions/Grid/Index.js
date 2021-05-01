import { ViewGridIcon } from '@heroicons/react/outline'
const grid = props => {
  const { setGridView, GridView } = props
  return (
    <li
      onClick={() => setGridView(true)}
      className={`mr-1 ${GridView ? 'curser-normal' : 'cursor-pointer'}`}
    >
      <ViewGridIcon
        className={`${GridView ? 'text-black' : 'text-cool'} w-7 h-7 `}
      />
    </li>
  )
}

export default grid
