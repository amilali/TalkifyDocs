'use client';
import React, { Children, createContext, useState } from 'react'
export const createBtnContext = createContext();

const BtnDisable = ({children }) => {
const [disable, setDisable] = useState(false);
  return (
    <createBtnContext.Provider value={{disable, setDisable}}>
      {children}
    </createBtnContext.Provider>

  )
}

export default BtnDisable