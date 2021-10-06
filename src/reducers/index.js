const reducer = (state, action) =>{

    switch(action.type){
       case "ADD_CART":
           return{
               ...state, 
               carrito: [...state.carrito,action.payload]
           }
       case "DELETE_CART":
           return{
               ...state,
               carrito:state.myList.filter(items => items.id!==action.payload)
           }
        case "QUANTITY_CART":
           return{
               ...state,
               carrito:[...state.carrito, state.carrito.map(items => items.nombre===action.payload.nombre? action.payload.cantidad:false)]
           }
       
        default: return state;
    }
    
   
   }
   export default reducer