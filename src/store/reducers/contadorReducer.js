
import * as type from '../../helpers/constants'
  
  export const initialState = {
    numero: 0,
  };
  
  const contadorReducer = (state = initialState, action) => {
    switch (action.type) {
      case type.INCREMENTAR:
        return { ...state, numero: numero++ };
      case type.DECREMENTAR:
        return { ...state, numero: numero-- };
      default:
        return state;
    }
  };
  
  export default contadorReducer;
  