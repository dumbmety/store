import { ViewGridIcon } from '@heroicons/react/outline'
const grid = props => {
  const { active } = props;
  return (
    <li className={`mr-1 ${active ? 'curser-normal' : 'cursor-pointer'}`}>
      <ViewGridIcon className={`${active ? 'text-black' : 'text-cool' } w-7 h-7 `} />
    </li>
  )
}

export default grid
