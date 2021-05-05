import { createContext, useContext, useState } from 'react'

const LayoutContext = createContext({
  layout: '',
  changeLayout: () => {},
})

const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState('grid')

  const changeLayout = layout => {
    setLayout(layout)
  }

  return (
    <LayoutContext.Provider value={{ layout, changeLayout }}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = () => {
  return useContext(LayoutContext)
}

export default LayoutProvider
