import { createContext, useContext, useState } from 'react'

const Context = createContext({
  layout: '',
  changeLayout: () => {},
})

const Provider = ({ children }) => {
  const [layout, setLayout] = useState('grid')

  const changeLayout = layout => {
    setLayout(layout)
  }

  return (
    <Context.Provider value={{ layout, changeLayout }}>
      {children}
    </Context.Provider>
  )
}

export const useDataHandler = () => {
  return useContext(Context)
}

export default Provider
