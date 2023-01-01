import { useState, useEffect, createContext, Children } from "react";

const CategoriesContext = createContext()

const CategoriesProvider = ({ children }) => {
  return (
    <CategoriesContext.Provider
      value={{}}
    >
      {Children}
    </CategoriesContext.Provider>
  )
}

export { CategoriesProvider }

export default CategoriesContext