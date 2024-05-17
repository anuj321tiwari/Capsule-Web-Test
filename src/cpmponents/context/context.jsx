import { useContext, useEffect, useReducer } from "react"
import React from "react"
import reducer from "./Reducer"

let url = `https://backend.cappsule.co.in/api/v1/new_search?`
const current = {
    query: "",
    id: 0,
    data : {
        saltSuggestions: []
    },
}
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [state, setState] = useReducer(reducer, current)
    
    const FetchData = async (url) => {
        try {
            
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        
            setState({
                type: "GET_Medicine",
                payload: {
                    data: data.data
                }
            })
            
        } catch (error) {
            console.log("Error in Fetching")
        }
    }

    const setQuery = (searchQuery) =>{
            setState({type: "Search", payload: searchQuery})
    }

    
    useEffect(() => {
        let setTime = setTimeout(() => {
            FetchData(`${url}q=${state.query}&pharmacyIds=${state.id}`);
        }, 1000);
        return () => clearTimeout(setTime)
        
    }, [state.query])
    return (
        <AppContext.Provider value={{...state, setQuery}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }