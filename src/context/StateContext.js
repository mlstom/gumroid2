import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
  const [mani, setmani] = useState(false)
  return (
    <Context.Provider
      value={{
        mani,
        setmani
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);