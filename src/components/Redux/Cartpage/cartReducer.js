import CartData from "./action"
const initalState=[]
export const cartReducer = (state=initalState,{type,payload}) => {
    switch (type) {
        case CartData:
            return {
                
                ...state, CartData
                    : [...state.CartData,...payload]
             
            };
        default:
            return state;
    }

}