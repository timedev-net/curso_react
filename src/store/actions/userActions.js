import * as type from '../../helpers/constants'

export const userActions = {

    login: (payload) => ({ type: type.LOGIN, payload }),
    logout: () => ({ type: type.LOGOUT }),

  };