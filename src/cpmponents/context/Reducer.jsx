

const reducer = (state, action) => {
   
        switch (action.type) {
            case "GET_Medicine":
                return {
                    ...state,
                    data : action.payload.data
                }
                break;
            
            case "Search":
                return{
                    ...state,
                    query: action.payload
                }
                break
            
            case "click":
                return{
                    ...state,
                    query: action.payload
                }
        
            default:
                return state
        }
    
}

export default reducer