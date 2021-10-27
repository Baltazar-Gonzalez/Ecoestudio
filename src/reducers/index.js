const reducer = (state, action) =>{

    switch(action.type){
       case "ADD_CART":
           if(state.carrito.filter(items => items.id===action.payload.id).length===0){
            return{
                ...state,
                carrito: [...state.carrito,action.payload]
            }     
        }
        if(state.carrito.filter(items => items.id===0)){
            return{
                ...state,
                carrito:state.carrito.map(items => items.id===action.payload.id ? {...items, semilla:action.payload.semilla}:items)
        }}
        else{
            return{
                ...state,
                carrito:[...state.carrito]
            }
        }
       case "DELETE_CART":
           return{
               ...state,
               productos:state.productos.map(items => items.id===action.payload[0].id ? {...items, cantidad: 1}:items),
               carrito:state.carrito.filter(items => action.payload[0].id!==items.id)
           }
        case "QUANTITY_CART":
           return{
               ...state,
               productos:state.productos.map(items => items.id===action.payload.id ? {...items, cantidad: action.payload.cantidad}:items),
               carrito:state.carrito.map(items => items.id===action.payload.id ? {...items, cantidad: action.payload.cantidad, precio: action.payload.precio*action.payload.cantidad}:items)
           }
       
        default: return state;
    }
    
   
   }
   export default reducer