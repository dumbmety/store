import { ViewListIcon } from '@heroicons/react/outline'

export default function Toggle({ showNavbar }) {
  return (
    <div onClick={showNavbar} className="cursor-pointer lg:hidden">
      <ViewListIcon className="w-7 h-7" />
    </div>
  )
}
