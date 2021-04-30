import './index.css'

import { DotsHorizontalIcon } from '@heroicons/react/outline'

function Footer() {
  return (
    <footer className="main-footer">
      <a
        href="https://www.instagram.com/junior.coders"
        target="_blank"
        rel="noreferrer"
      >
        <img className="logo" src="/images/team-logo.png" alt="Junior Coders" />
      </a>
      <h4 className="name">Junior Coders Team</h4>
      <button className="button">
        <DotsHorizontalIcon width={24} height={24} />
      </button>
    </footer>
  )
}

export default Footer
