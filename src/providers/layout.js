import { createContext } from 'react'

const LayoutContext = createContext({
  layout: '',
  changeLayout: () => {},
})

export default LayoutContext
