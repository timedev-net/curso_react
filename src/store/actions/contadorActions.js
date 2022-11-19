import * as type from '../../helpers/constants'

export const contadorActions = {

    incrementar: (payload) => ({ type: type.INCREMENTAR, payload }),
    decrementar: () => ({ type: type.DECREMENTAR }),

  };