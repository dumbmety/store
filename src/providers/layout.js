import { createContext, useContext, useState } from 'react'

const initialState = {
  layout: '',
  changeLayout: () => {},
}

const LayoutContext = createContext(initialState)

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState('grid')

  function changeLayout(layout) {
    setLayout(layout)
  }

  return (
    <LayoutContext.Provider
      value={{ layout, changeLayout }}
      children={children}
    />
  )
}

export const useLayout = () => {
  return useContext(LayoutContext)
}
