import { createContext, useState } from 'react'

export const AppContext = createContext()

export const ContextProvider = ({children}) => {
    const [cat, setCat ] = useState()
   const [filter, setFilter] = useState({})
   const [sort, setSort ] = useState('newest')
   const [singleId, setSingleId] = useState()
    return(
        <AppContext.Provider value={{
            cat, setCat,
            filter, setFilter,
            sort, setSort
        }}>

            {children}
        </AppContext.Provider>
    )
}