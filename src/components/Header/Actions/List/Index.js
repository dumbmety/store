import { ViewListIcon } from '@heroicons/react/outline'
const list = props => {
  const { active } = props
  return (
    <li className={`mr-1 ${active ? 'curser-normal' : 'cursor-pointer'}`}>
      <ViewListIcon
        className={`${active ? 'text-black' : 'text-cool'} w-7 h-7 mr-4`}
      />
    </li>
  )
}

export default list
