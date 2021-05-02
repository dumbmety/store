import { ViewListIcon } from '@heroicons/react/outline'
const Toggle = ({ setShow }) => {
  return (
    <div onClick={() => setShow(true)} className="cursor-pointer">
      <ViewListIcon className="w-7 h-7" />
    </div>
  )
}
export default Toggle
