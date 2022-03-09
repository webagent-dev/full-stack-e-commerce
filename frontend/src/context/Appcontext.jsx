import { createContext, useState } from 'react'

export const AppContext = createContext()

export const ContextProvider = ({children}) => {
    const [cat, setCat ] = useState()
    const [filter, setFilter] = useState({})
    // const [product, setProduct] = useState()
    const [filterProduct, setFilterProduct] = useState()
    const [sort, setSort ] = useState()
    const [singleProduct, setSingleProduct ] = useState({})

    return(
        <AppContext.Provider value={{
            cat, setCat,
            filter, setFilter,
            filterProduct, setFilterProduct,
            sort, setSort,
            singleProduct, setSingleProduct
        }}>
            {children}
        </AppContext.Provider>
    )
}
